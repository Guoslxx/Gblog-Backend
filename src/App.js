import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import BaseLayout from '@layouts/BaseLayout';
import UnauthorizedLayout from '@layouts/UnauthorizedLayout';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import AuthorizedRoute from './common/AuthorizedRoute';
import './common.less';

import config from './utils/config';
const { pathPrefix } = config;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <AuthorizedRoute path={pathPrefix} component={BaseLayout} />
        <Route path="/auth" component={UnauthorizedLayout} />
        <Redirect to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>
)
export default App;