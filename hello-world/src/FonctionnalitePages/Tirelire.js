import React, { Component } from 'react';

class Tirelire extends Component {

  render() {

    return (
      <div>
      <h4>Les tirelires</h4>
<p>
Une des fonctionnalités principales que nous avons mis en place est une fonctionnalité qui permet une gestion simplifiée des budgets du client. Chaque projet financier du client est représenté par une tirelire. On peut avoir des tirelires que l’on doit remplir pour rembourser un emprunt, des tirelires qui représentent des évènements précis (cagnotte pour un anniversaire ou tirelire à dépenser pour des vacances) et des tirelires pour épargner de l’argent dans le but d’un achat prochain (voiture, ordinateur, etc).
<br />
Sur l’écran d’accueil le client retrouve ses tirelires, il y voit aussi ses dépenses et crédits récents qu’il peut déplacer dans une tirelire pour associer celui-ci à un budget prédéfini (par exemple déplacer un achat dans la tirelire “course” qui est créditée tous les mois d’une certaine somme dédiée).
</p>
      </div>
    );
  }
}

export default Tirelire;
