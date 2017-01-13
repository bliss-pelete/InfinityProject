import React, { Component } from 'react';
import './MenuItems.css';
import { Link } from 'react-router';

class MenuItems extends Component {

  render () {
    const items = ['Intro', 'Developpement', 'Problems', 'Demo'];

    return (
      <div>
        <ul>
          <li><Link to="/intro"> {items[0]} </Link></li>
          {this.props.child}
          <li><Link to="/developpement"> {items[1]} </Link></li>
          <li><Link to="/problems"> {items[2]} </Link></li>
          <li><Link to="/demo"> {items[3]} </Link></li>
        </ul>

      </div>
    );
  };

  //onClick ()
}

export default MenuItems;
