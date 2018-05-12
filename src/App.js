import React, { Component } from 'react';
import {Routes} from './routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <Routes/>
          </div>
      </div>
    );
  }
}

export default App;
