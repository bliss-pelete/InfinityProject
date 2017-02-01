import React, { Component } from 'react';

class Compte extends Component {

  render() {

    return (
      <div>
      <h4>Création de compte</h4>

      <p>Simplification du processus</p>
      <p>Directement depuis le téléphone</p>
      <p>Saisie des informations de base (nom, prénom, adresses, etc.)</p>
      <p>Photo ou scan des pièces justificatives</p>
      <p>Possibilité de prendre rdv pour faire ça avec un conseiller</p>
      <img role="presentation" src={require('../images/creacompte2.png')} />
      <img role="presentation" src={require('../images/CreaCompte7.png')}/>
      </div>
    );
  }
}

export default Compte;
