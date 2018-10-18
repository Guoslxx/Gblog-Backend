import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import BaseLayout from '@layouts/BaseLayout';
import UnauthorizedLayout from '@layouts/UnauthorizedLayout';
import { HashRouter,BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import AuthorizedRoute from './common/AuthorizedRoute';
import './common.less';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthorizedRoute path="/" exact component={BaseLayout} />
        <Route path="/auth" component={UnauthorizedLayout} />
        <Route path="/test" render={props => (<div>test</div>)} />
        <Redirect to="/auth" />
      </Switch>
    </HashRouter>
  </Provider>
)
export default App;