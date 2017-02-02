import React, { Component } from 'react';
import { Link } from 'react-router';

class DemoWrapper extends Component {

  render() {

    return (
      <div>
        <ul>
          <li><Link to="/demo/test"> Test </Link></li>
        </ul>
      </div>
    );
  }
}

export default DemoWrapper;
