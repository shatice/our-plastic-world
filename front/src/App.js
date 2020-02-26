import React, {} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './scss/styles.scss';

import axios from 'axios';

/***** COMPONENTS *****/
import Home from './routes/home/Home.jsx';
import Intro from './routes/intro/Intro.jsx';
import Main from './routes/main/Main.jsx';

require('dotenv').config()

function App() {
  return(
  <div>
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/intro" component={Intro}/>
      <Route exact path="/main" component={Main}/>
    </Switch>
  </Router>
  </div>

  );
};

export default App;
