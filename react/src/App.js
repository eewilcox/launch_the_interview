import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Questions from './containers/Questions';


const Home = () => (
  <div>
    <span>
      <h4>Non-Technical Questions</h4>
      <h4>Technical Questions</h4>
      <h4>Project Questions</h4>
      <h4>Company Specific Questions</h4>
    </span>
  </div>
)

const App = () => (
  <Router>
    <div>

        <Route exact path="/" component={Home}/>
        <Route path="/questions" component={Questions}/>

    </div>
  </Router>
);

export default App;
