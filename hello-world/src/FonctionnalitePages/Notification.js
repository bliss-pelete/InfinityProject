import React, { Component } from 'react';
import './common.css';
class Notification extends Component {

  render() {

    return (
      <div>
      <h4>Les notifications</h4>
      <div>
        <div className="textbox">
          <ul className="common_li">
            <li>Directement intégré à l’application</li>
            <li>Notifie :
              <ul className="justcirle">
                <li>- Les montants crédités ou débités</li>
                <li>- Les paliers atteints ou non</li>
                <li>- Les bons plans</li>
                <li>- Etc.</li>
              </ul>
            </li>
            <li>Totalement paramétrable</li>
          </ul>
        </div>
        <div>
          <img role="presentation" src={require('../images/Notif1.png')}/>
          <img role="presentation" src={require('../images/Notif3.png')}/>
        </div>
      </div>
      </div>
    );
  }
}

export default Notification;
