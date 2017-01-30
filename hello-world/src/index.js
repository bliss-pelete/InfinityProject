import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
import Intro from './IntroPages/Intro';
import Objectifs from './IntroPages/Objectifs';
import Challenge from './IntroPages/Challenge';
import Existant from './IntroPages/Existant';
import Dev from './DevPages/Dev';
import Entretiens from './DevPages/Entretiens';
import Mockups from './DevPages/Mockups';
import DemoWrapper from './DemoPages/DemoWrapper';
import Demo from './DemoPages/Demo';
import Fonctionnalite from './FonctionnalitePages/Fonctionnalite';
import Aide from './FonctionnalitePages/Aide';
import Colloc from './FonctionnalitePages/Colloc';
import Compte from './FonctionnalitePages/Compte';
import Etranger from './FonctionnalitePages/Etranger';
import Notification from './FonctionnalitePages/Notification';
import Tirelire from './FonctionnalitePages/Tirelire';
import Virement from './FonctionnalitePages/Virement';
import Menu from './Menu/Menu';


ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <Route path="/intro" component={Intro} />
        <Route path="/intro/objectifs" component={Objectifs} />
        <Route path="/intro/challenge" component={Challenge} />
        <Route path="/intro/existant" component={Existant} />
        <Route path="/developpement" component={Dev} />
        <Route path="/developpement/entretiens" component={Entretiens} />
        <Route path="/developpement/mockups" component={Mockups} />
        <Route path="/fonctionnalite" component={Fonctionnalite} />
        <Route path="/fonctionnalite/aide" component={Aide} />
        <Route path="/fonctionnalite/colloc" component={Colloc} />
        <Route path="/fonctionnalite/compte" component={Compte} />
        <Route path="/fonctionnalite/etranger" component={Etranger} />
        <Route path="/fonctionnalite/notification" component={Notification} />
        <Route path="/fonctionnalite/tirelire" component={Tirelire} />
        <Route path="/fonctionnalite/virement" component={Virement} />
        <Route path="/demo" component={DemoWrapper} />
        <Route path="/demo/test" component={Demo} />
      </Route>
    </Router>
  )
  , document.getElementById('root')
);
