import React, { Component } from 'react';

class Team extends Component {

  render() {

    return (
      <div>

      <h4>Équipe</h4>
      <img role="presentation" src={require('../images/eugenie.png')} />
      <p>Passionnée de développement je veux révolutionner les technologies</p>
      <img role="presentation" src={require('../images/coline.jpg')} />
      <p>Passionnée d’IoT je veux travailler pour améliorer l’environnement</p>
      <img role="presentation" src={require('../images/moi.jpg')} />
      <p>Passionné d'UX je veux rendre le monde accessible à tous</p>
      <img role="presentation" src={require('../images/bliss.jpg')} />
      <p>Toujours prêt à relever les défis, je veux offrir aux monde le meilleur de l'innovation</p>
      </div>
    );
  }
}

export default Team;
