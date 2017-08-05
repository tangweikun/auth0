import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth'

const auth = new Auth()

class App extends Component {
  render() {
    console.log("====", auth.isAuthenticated(), auth);
    return <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={() => auth.login()}>Login</div>
        <div onClick={() => auth.logout()}>Logout</div>
      </div>
  }
}

export default App;
