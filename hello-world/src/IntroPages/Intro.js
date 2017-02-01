import React, { Component } from 'react';
import { Link } from 'react-router';

class Intro extends Component {

  render() {

    return (
      <div>
        <ul>
          <li><Link to="/intro/objectifs"> Objectifs </Link></li>
          <li><Link to="/intro/challenge"> Challenge </Link></li>
          <li><Link to="/intro/existant"> Existant </Link></li>
          <li><Link to="/intro/team"> Team </Link></li>
        </ul>
      </div>
    );
  }
}

export default Intro;
