import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fetchImages from '../services/pixabay-api';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: Status.IDLE,
    showModal: false,
    loading: false,

    activeImg: null,
    lastPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchImageName } = this.props;

    if (prevProps.searchImageName !== searchImageName) {
      this.setState({ images: [] }, () => {
        this.loadImages(1);
      });
    }

    if (prevState.images !== this.state.images) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 0);
    }
  }

  loadImages = page => {
    const { images } = this.state;
    const { searchImageName } = this.props;

    this.setState({ loading: true, lastPage: page });
    setTimeout(() => {
      fetchImages(searchImageName, page)
        .then(({ hits, total }) => {
          if (!total) {
            const error = new Error(
              `There is no picture with ${searchImageName} name, please enter another request`,
            );
            this.setState({ error, status: Status.REJECTED });
          } else {
            this.setState({
              images: [...(images || []), ...hits],
              status: Status.RESOLVED,
            });
          }
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));

      this.setState({ loading: false });
    }, 1000);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onModalOpen = activeImg => {
    this.setState({ activeImg });
    this.toggleModal();
  };

  onBtnClick = () => {
    const { lastPage } = this.state;
    this.setState({ loading: true });
    this.loadImages(lastPage + 1);
  };

  render() {
    const { images, error, status, showModal, loading, activeImg } = this.state;

    if (status === Status.IDLE) {
      return <div className="errorMessage">Please enter your request</div>;
    }

    if (status === Status.REJECTED) {
      return <h1>{error.message}</h1>;
    }

    if (status === Status.RESOLVED) {
      return (
        <>
          <ul className="ImageGallery">
            {images.map(image => (
              <ImageGalleryItem
                key={`image-item-image-${image.id}`}
                onModalOpen={this.onModalOpen}
                image={image}
              />
            ))}
          </ul>

          {loading && <Loader />}
          <Button onBtnClick={this.onBtnClick} />

          {showModal && (
            <Modal onModalClose={this.toggleModal} activeImg={activeImg} />
          )}
        </>
      );
    }
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  searchImageName: PropTypes.string.isRequired,
};