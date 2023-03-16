import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import SignInContainer from '../containers/SignInContainer';
import SignUpContainer from '../containers/SignUpContainer';
import HomeContainer from '../containers/HomeContainer';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute'
import Register from '../pages/Register';
import NotFound from '../pages/NotFound'


const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.SIGN_IN} component={SignInContainer} />
      <PublicRoute path={ROUTES.SIGN_UP} component={SignUpContainer} />
      <PrivateRoute path={ROUTES.HOME} component={HomeContainer} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
