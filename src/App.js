import React, { Component } from 'react';
import './App.css';

import Body from './Components/Body/Body';

const setWindow = () => {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

class App extends Component {


  componentDidMount() {
    setWindow();
    window.addEventListener('resize', () => {
      setWindow();

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
