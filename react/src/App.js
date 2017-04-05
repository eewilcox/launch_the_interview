import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from 'react-router-dom';

import Questions from './containers/Questions';

const Home = () => (
  <div className="home">
    <Link to="/questions">General Questions</Link>
    <Link to="/techquestions">Technical Questions</Link>
    <h4>Project Specific Questions</h4>
    <h4>Company Specific Questions</h4>
  </div>
)

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeClassName="active" to="/questions">General Questions</NavLink>
    <NavLink activeClassName="active" to="/techquestions">Technical Questions</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
        <Links />
        <Route exact path="/" component={Home}/>
        <Route path="/questions" component={Questions}/>
        <Route path="/techquestions" component={Questions}/>
    </div>
  </Router>
);

export default App;
