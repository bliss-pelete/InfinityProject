import React, { Component } from 'react';
import './common.css';

class Aide extends Component {

  render() {

    return (
      <div>
      <h4>Aide et conseil</h4>
      <div>
      <div className="textbox">
        <ul className="common_li">
          <li>FAQ :
            <ul>
            <li>Très gros contenu</li>
            <li>Précisions sur les termes des contrats</li>
            </ul>
          </li>
          <li>Tchat :
            <ul>
            <li>Réponse rapide</li>
            <li>Pas forcément besoin d’un conseiller ni d’un contact IRF</li>
            </ul>
          </li>
          <li>Rappel par un conseiller :
          <ul>
            <li>Gratuit et rapide</li>
          </ul>
          </li>
          <li>Urgences :
            <ul>
            <li>Accès rapide et direct</li>
            <li>Carte perdue avec possibilité de blocage temporaire (48h)</li>
            <li>Code pin oublié</li>
            </ul>
          </li>
          <li>Tuto :
          <ul>
            <li>A chaque première utilisation</li>
            <li>Activable de nouveau depuis l’aide</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <img role="presentation" src={require('../images/Aide.png')} />
        <img role="presentation" src={require('../images/AideCallConseillerDownClicked.png')} />

      </div>
      <img role="presentation" src={require('../images/AideFAQ.png')} />
      <img role="presentation" src={require('../images/AideMessage.png')} />
      <div>
      </div>
      </div>
      </div>
    );
  }
}

export default Aide;
