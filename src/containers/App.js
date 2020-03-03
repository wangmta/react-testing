import React, { Component } from 'react';
import Header from '../components/Header';
//import logo from './logo.svg';
import '../App.css';
import StoreLocator from './StoreLocator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Testing Demo</h1>
        <Header />
        <StoreLocator />
      </div>
    );
  }
}

export default App;
