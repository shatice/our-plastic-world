import React, {} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './scss/styles.scss';

import axios from 'axios';

/***** COMPONENTS *****/
import Intro from './components/intro/Intro.jsx';
import Main from './components/Main.jsx';
import Globe from './components/globe/Globe.jsx';

require('dotenv').config()

function App() {
  return(
    <Router>
    <Switch>
      {/* <Route exact path="/" component={Home}/> */}
      <Route exact path="/" component={Main}/>
      {/* <Route name="le-plastique-et-le-monde" path="/step1" component={Step1}/> */}
    </Switch>
  </Router>
  );
};

export default App;
