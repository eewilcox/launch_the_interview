import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import QuestionsIndexContainer from './containers/QuestionsIndexContainer';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={QuestionsIndexContainer} />
  </Route>
);

export default routes;
