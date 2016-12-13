import React, { Component } from 'react';
import logo from './icon.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Projet newBANK !</h2>
        </div>
        <p className="App-intro">
            <iframe src="https://marvelapp.com/48c9804?emb=1" width="390" height="755" allowTransparency="true" frameborder="0"></iframe>
        </p>
      </div>
    );
  }
}

export default App;
