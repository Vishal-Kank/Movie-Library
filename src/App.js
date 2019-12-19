import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer';
import Landing from './component/home/Landing';
import Movie from './component/home/Movie';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/movie/:id' component={Movie} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  };
}

export default App;
