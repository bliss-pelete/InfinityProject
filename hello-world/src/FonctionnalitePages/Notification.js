import React, { Component } from 'react';

class Notification extends Component {

  render() {

    return (
      <div>
      <h4>Les notifications</h4>
      <p>Directement intégré à l’application</p>
      <p>Notifie :
        <br />Les montants crédités ou débités
        <br />Les paliers atteints ou non
        <br />Les bons plans
        <br />Etc.
      </p>
      <p>Totalement paramétrable</p>
      <p>Juste avec un numéro de mobile, un mail ou un QR’rib</p>
      <img role="presentation" src={require('../images/Notif1.png')}/>
      <img role="presentation" src={require('../images/Notif3.png')}/>
      </div>
    );
  }
}

export default Notification;
