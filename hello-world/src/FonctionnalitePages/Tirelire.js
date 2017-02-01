import React, { Component } from 'react';

class Tirelire extends Component {

  render() {

    return (
      <div>
      <h4>Les tirelires</h4>
      <p>Gestion simplifiée des budgets</p>
      <p>Une tirelire par projet financier</p>
      <p>Exemples :
        <br />Tirelire que l’on remplit pour rembourser un emprunt
        <br />Cagnotte d’anniversaire
        <br />Tirelire à dépenser pendant les vacances
        <br />Tirelire d'épargne pour achat futur
      </p>
      <p>Visibles sur l’accueil avec les dernières dépenses</p>
      <p>Visibles depuis les différents comptes</p>
      <p>A remplir et vider en déplacements les sommes</p>
      <img role="presentation" src={require('../images/Tirelire2.png')}/>
      <img role="presentation" src="" />
      </div>
    );
  }
}

export default Tirelire;
