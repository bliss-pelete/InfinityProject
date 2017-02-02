import React, { Component } from 'react';
import './common.css';
class Virement extends Component {

  render() {

    return (
      <div>
      <h4>Les virements</h4>
      <div>
      <div className="textbox">
      <ul className="common_li">
      <li>Moderniser cette fonctionnalité classique</li>
      <li>Simples et Rapides</li>
      <li>Facilité pour les très petites sommes</li>
      <li>Juste avec un numéro de mobile, un mail ou un QR’rib</li>
      </ul>
      </div>
      <div>
      <img role="presentation" src={require('../images/VirementRempli.png')}/>
      <img role="presentation" src={require('../images/VirementAccueilBeneficiaire.png')}/>
      </div>
      </div>
      </div>
    );
  }
}

export default Virement;
