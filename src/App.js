import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../src/containers/HomePage/HomePage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={HomePage}/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
