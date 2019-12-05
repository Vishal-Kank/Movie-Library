import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer';
import store from './store';
import { Provider } from 'react-redux';
import Landing from './component/home/Landing';

import { HashRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Landing />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  };
}

export default App;
