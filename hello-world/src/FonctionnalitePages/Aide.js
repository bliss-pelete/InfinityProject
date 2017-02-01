import React, { Component } from 'react';
import './common.css';

class Aide extends Component {

  render() {

    return (
      <div>
      <h4>Aide et conseil</h4>
      <p>FAQ :
        <br />Très gros contenu
        <br />Précisions sur les termes des contrats
      </p>
      <p>Tchat :
        <br />Réponse rapide
        <br />Pas forcément besoin d’un conseiller ni d’un contact IRF
      </p>
      <p>Rappel par un conseiller :
        <br />Gratuit et rapide
      </p>
      <p>Urgences :
        <br />Accès rapide et direct
        <br />Carte perdue avec possibilité de blocage temporaire (48h)
        <br />Code pin oublié
      </p>
      <p>Tuto :
        <br />A chaque première utilisation
        <br />Activable de nouveau depuis l’aide
      </p>
      <img role="presentation" src="" />
      <img role="presentation" src="" />
      </div>
    );
  }
}

export default Aide;
