import React, { Component } from 'react';
import './MenuItems.css';
import { Link } from 'react-router';


class MenuItems extends Component {

  render () {
    const items = ['Intro', 'Developpement', 'Problems', 'Demo'];
    const subItems = this.props.child;
    const itemsM = (items.map(function(x) {

        var subItem=items.indexOf(x);
      return (

                  <li>
                    <div className="MenuItem">
                      <Link to={"/"+ x.toLowerCase()}> {x}</Link>

                      <div>{subItems}</div>
                      <ul>

                      </ul>
                    </div>
                  </li>
            );
    }));

    return (
      <div>
        <ul>
          {itemsM}

          {this.props.child}
        </ul>
      </div>);
  };

  //onClick ()
}

export default MenuItems;
