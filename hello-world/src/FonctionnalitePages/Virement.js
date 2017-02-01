import React, { Component } from 'react';

class Virement extends Component {

  render() {

    return (
      <div>
      <h4>Les virements</h4>
      <p>Moderniser cette fonctionnalité classique</p>
      <p>Simples et Rapides</p>
      <p>Facilité pour les très petites sommes</p>
      <p>Juste avec un numéro de mobile, un mail ou un QR’rib</p>
      <img role="presentation" src={require('../images/VirementRempli.png')}/>
      <img role="presentation" src={require('../images/VirementAccueilBeneficiaire.png')}/>
      </div>
    );
  }
}

export default Virement;
