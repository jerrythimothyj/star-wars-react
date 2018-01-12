import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from './components/Login/Login';
import Planets from './components/Planets/Planets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars</h1>
        <Switch>
          <Route path="/planets" component={Planets} />
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
