import React, { Component } from 'react';
import { Link } from 'react-router';

class Dev extends Component {

  render() {

    return (
      <div>
        <ul>
          <li><Link to="/developpement/agile"> Agile </Link></li>
          <li><Link to="/developpement/fonctionnalites"> Fonctionnalites </Link></li>
        </ul>
      </div>
    );
  }
}

export default Dev;
