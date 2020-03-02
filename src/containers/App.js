import React, { Component } from 'react';
import Header from '../components/Header';
//import logo from './logo.svg';
import '../App.css';
import StoreLocator from './StoreLocator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StoreLocator />
      </div>
    );
  }
}

export default App;
