import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchImageName: '',
  };

  handleImageChange = e => {
    this.setState({ searchImageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { searchImageName } = this.state;

    e.preventDefault();

    if (searchImageName.trim() === '') {
      toast.error('What picture do you need?');
      return;
    }

    this.props.submit(this.state.searchImageName);
    this.setState({ searchImageName: '' });
  };

  render() {
    const { searchImageName } = this.state;

    return (
      <header className="Searchbar">
        {}
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchImageName}
            onChange={this.handleImageChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  submit: PropTypes.func.isRequired,
};