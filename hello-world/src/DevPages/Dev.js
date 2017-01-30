import React, { Component } from 'react';
import { Link } from 'react-router';

class Dev extends Component {

  render() {

    return (
      <div>
        <ul>
          <li><Link to="/developpement/entretiens"> Entretiens </Link></li>
          <li><Link to="/developpement/mockups"> Mockups </Link></li>
        </ul>
      </div>
    );
  }
}

export default Dev;
