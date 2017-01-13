import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Menu child={this.props.children} />
        </div>
      </div>
    );
  }
}

export default App;
