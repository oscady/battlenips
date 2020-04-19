import React, { Component } from 'react';
import './App.css';

import Body from './Components/Body/Body';
class App extends Component {

  componentDidMount = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

export default App;
