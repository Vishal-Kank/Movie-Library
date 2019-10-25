import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Footer from './component/Footer.';
import store from './store';
import { Provider } from 'react-redux'
import Landing from './component/Landing';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Landing />
        <Footer />
      </Provider>
    )
  };
}

export default App;
