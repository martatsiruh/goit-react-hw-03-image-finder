/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
*/

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import './App.css'



class App extends Component {
  state = {
    searchImageName: '',
  };

  handleFormSubmit = searchImageName => {
    this.setState({ searchImageName });
  };

  render() {
    const { searchImageName } = this.state;

    return (
      <div className="App">
        <ToastContainer />

        {}
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery searchImageName={searchImageName} />
      </div>
    );
  }
}

//PureComponent и shouldComponentUpdate

export default App;

// --------------------
// API - bk

// const fn = a => {
//   return console.log(a);
// };
// fn('2');
// fn('a');