import React, { Component } from 'react';
import "./team.css";
class Team extends Component {

  render() {

    return (
      <div>

      <h4>Équipe</h4>
      <div className="format">
          <img role="presentation" src={require('../images/eugenie.png')} />
          <img role="presentation" src={require('../images/coline.jpg')} />
          <img role="presentation" src={require('../images/moi.jpg')} />
          <img role="presentation" src={require('../images/bliss.jpg')} />


      </div>

      <p>Passionnée de développement je veux révolutionner les technologies</p>

      <p>Passionnée d’IoT je veux travailler pour améliorer l’environnement</p>
      <p>Passionné d UX je veux rendre le monde accessible à tous</p>
      <p>Toujours prêt à relever les défis, je veux offrir aux monde le meilleur de l innovation</p>
      </div>
    );
  }
}

export default Team;
