import React, { Component } from 'react';
import './App.css';

import Body from './Components/Body/Body';
class App extends Component {

  componentDidMount() {
    window.addEventListener('resize', () => {

      let vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
}

export default App;
