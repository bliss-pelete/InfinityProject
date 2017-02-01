import React, { Component } from 'react';
import './common.css';
class Colloc extends Component {

  render() {

    return (
      <div>
      <h4>Entre colocs</h4>
      <div >
        <div className="textbox">
        <ul className="common_li">
          <li>18-35 ans beaucoup de colocations (ou jeunes couples)</li>
          <li>Gestion simplifiée avec un compte commun ou une tirelire commune</li>
          <li>Tout le monde est averti des mouvements d’argent</li>
          <li>Validation des dépenses par tout le monde</li>
          <li>Participation commune simplifiée</li>
        </ul>
        </div>
        <div>
          <img role="presentation" src={require('../images/EntreColoc2.png')}/>
          <img role="presentation" src="" />
        </div>
      </  div>
      </div>
    );
  }
}

export default Colloc;
