import React, { Component } from 'react';
import { Link } from 'react-router';

class Problems extends Component {

  render() {

    return (
      <div>
        <ul>
          <li><Link to="/problems/team"> Team Problems </Link></li>
          <li><Link to="/problems/tech"> Tech Problems </Link></li>
        </ul>
      </div>
    );
  }
}

export default Problems;
