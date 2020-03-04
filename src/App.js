import React, { Component } from 'react';
import './App.css';
import Button from './components/button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <Button label="i'm the button label." />
        </header>
      </div>
    );
  }
}

export default App;
