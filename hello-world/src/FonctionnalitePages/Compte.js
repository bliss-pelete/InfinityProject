import React, { Component } from 'react';
import './common.css';
class Compte extends Component {

  render() {

    return (
      <div>
      <h4>Création de compte</h4>
      <div>
      <div className="textbox">
        <ul  className="common_li">
          <li>Simplification du processus</li>
          <li>Directement depuis le téléphone</li>
          <li>Saisie des informations de base (nom, prénom, adresses, etc.)</li>
          <li>Photo ou scan des pièces justificatives</li>
          <li>Possibilité de prendre rdv pour faire ça avec un conseiller</li>
        </ul>
        </div>
        <div className="imagebox">
          <img role="presentation" src={require('../images/creacompte2.png')} />

          <img role="presentation" src={require('../images/CreaCompte7.png')}/>
        </div>
      </div>

      </div>
    );
  }
}

export default Compte;
