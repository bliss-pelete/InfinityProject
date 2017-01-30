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
import Agile from './DevPages/Agile';
import Fonctionnalites from './DevPages/Fonctionnalites';
import DemoWrapper from './DemoPages/DemoWrapper';
import Demo from './DemoPages/Demo';
import Problems from './ProblemsPages/Problems';
import Team from './ProblemsPages/Team';
import Tech from './ProblemsPages/Tech';
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
        <Route path="/developpement/agile" component={Agile} />
        <Route path="/developpement/fonctionnalites" component={Fonctionnalites} />
        <Route path="/problems" component={Problems} />
        <Route path="/problems/team" component={Team} />
        <Route path="/problems/tech" component={Tech} />
        <Route path="/demo" component={DemoWrapper} />
        <Route path="/demo/test" component={Demo} />
      </Route>
    </Router>
  )
  , document.getElementById('root')
);
