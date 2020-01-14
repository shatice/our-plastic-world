import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import './scss/styles.scss';

/***** COMPONENTS *****/
import Home from './components/Home.jsx';
import Step1 from './components/Step1.jsx';
import Step2 from './components/Step2.jsx';
import Step3 from './components/Step3.jsx';

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route name="le-plastique-et-le-monde" path="/step1" component={Step1}/>
        <Route name="le-plastique-et-l-ocean" path="/step2" component={Step2}/>
        <Route name="le-plastique-et-les-jo-2024" path="/step3" component={Step3}/>
      </Switch>
  </Router>
);

export default App;
