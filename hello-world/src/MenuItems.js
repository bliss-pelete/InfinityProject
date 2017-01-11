import React, { Component } from 'react';
import './MenuItems.css'
class MenuItems extends Component {


  render () {
    var items = ['Partie 1','Partie 2','Partie 3','Partie 4'];
    var list = items.map( function (x) {

      return <li onClick=""> {x} </li>;
    });
    var actualItems = <ul > {list} </ul>;

    return actualItems;
  };

  //onClick ()
}

export default MenuItems;
