import React, { Component } from 'react';
import { Link } from 'react-router';

class Fonctionnalite extends Component {

  render() {

    return (
      <div>
        <ul>
          <li><Link to="/fonctionnalite/compte"> Compte </Link></li>
          <li><Link to="/fonctionnalite/virement"> Virement </Link></li>
          <li><Link to="/fonctionnalite/notification"> Notification </Link></li>
          <li><Link to="/fonctionnalite/aide"> Aide </Link></li>
          <li><Link to="/fonctionnalite/tirelire"> Tirelire </Link></li>
          <li><Link to="/fonctionnalite/colloc"> Colloc </Link></li>
          <li><Link to="/fonctionnalite/etranger"> Etranger </Link></li>
        </ul>
      </div>
    );
  }
}

export default Fonctionnalite;
