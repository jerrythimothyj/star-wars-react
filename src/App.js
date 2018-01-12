import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Landing from './components/Login/Login'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars</h1>
        <Landing />
      </div>
    );
  }
}

export default App;
