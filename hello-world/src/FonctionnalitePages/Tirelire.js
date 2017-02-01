import React, { Component } from 'react';
import './common.css';
class Tirelire extends Component {

  render() {

    return (
      <div>
      <h4>Les tirelires</h4>
      <div>
      <div className="textbox">
      <ul className="common_li">
        <li>Gestion simplifiée des budgets</li>
        <li>Une tirelire par projet financier</li>
        <li>Exemples :
          <ul>
            <li>Tirelire que l’on remplit pour rembourser un emprunt</li>
            <li>Cagnotte d’anniversaire</li>
            <li>Tirelire à dépenser pendant les vacances</li>
            <li>Tirelire d épargne pour achat futur</li>
          </ul>
          </li>
        <li>Visibles sur l’accueil avec les dernières dépenses</li>
        <li>Visibles depuis les différents comptes</li>
        <li>A remplir et vider en déplacements les sommes</li>
        </ul>
        </div>
        <div>
        <img role="presentation" src={require('../images/Tirelire2.png')}/>
        <img role="presentation" src="" />
        </div>
      </div>
      </div>
    );
  }
}

export default Tirelire;
