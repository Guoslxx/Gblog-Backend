import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import BaseLayout from '@layouts/BaseLayout';
import UnauthorizedLayout from '@layouts/UnauthorizedLayout';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import AuthorizedRoute from './common/AuthorizedRoute';
import './common.less';

const App = () => {
  console.log('app!!!!!!!!!!!!!!!!')
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/app" component={BaseLayout} />
          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
export default App;