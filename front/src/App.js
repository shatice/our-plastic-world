import React, {} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './scss/styles.scss';

/***** COMPONENTS *****/
import Home from './routes/home/Home.jsx';
import Intro from './routes/intro/Intro.jsx';
import Main from './routes/main/Main.jsx';
import About from './routes/about/About.jsx';

require('dotenv').config()



function App() {

  return(
  <div>
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/intro" component={Intro}/>
      <Route exact path="/main" component={Main}/>
      <Route exact path="/about" component={About}/>
    </Switch>
  </Router>
  </div>

  );
};

export default App;
