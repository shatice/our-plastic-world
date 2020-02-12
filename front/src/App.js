import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import './scss/styles.scss';

/***** COMPONENTS *****/
import Intro from './components/intro/Intro.jsx';
import Main from './components/Main.jsx';
import Globe from './components/globe/Globe.jsx';

const App = () => (
  <Router>
    <Switch>
      {/* <Route exact path="/" component={Home}/> */}
      <Route exact path="/" component={Main}/>
      {/* <Route name="le-plastique-et-le-monde" path="/step1" component={Step1}/> */}
    </Switch>
  </Router>
);

export default App;
