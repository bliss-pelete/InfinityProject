import React, { Component } from 'react';
import './common.css';
class Etranger extends Component {

  render() {

    return (
      <div>
      <h4>Séjour à l’étranger</h4>
        <div className="textbox">
          <ul className="common_li">
            <li>Plus d’aide lors des déplacement de longue durée</li>
            <li>Menu spécifique, aide spécifique</li>
            <li>Localisation pour une aide ciblée</li>
            <li>Tarifs bancaires</li>
            <li>Banques partenaires</li>
            <li>Démarches importantes à réaliser à l’arrivée</li>
            <li>Points de retraits particuliers</li>
          </ul>
        </div>
        <div>
          <img role="presentation" src={require('../images/EtrangerAideInfo.png')} />
          <img role="presentation" src={require('../images/EtrangerAideLocation.png')} />
        </div>

      </div>
    );
  }
}

export default Etranger;
