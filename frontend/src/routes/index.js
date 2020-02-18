import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Questions from '../pages/Questions';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/details/:id" exact component={Details} isPrivate />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/questions" exact component={Questions} isPrivate />
    </Switch>
  );
}
