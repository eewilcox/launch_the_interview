import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Questions from './containers/Questions';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Questions}/>
      </Switch>
    </div>
  </Router>
);

export default App;
