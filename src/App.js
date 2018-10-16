import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import store from './store';

import BaseLayout from '@layouts/BaseLayout';
import UnauthorizedLayout from '@layouts/UnauthorizedLayout';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import AuthorizedRoute from './common/AuthorizedRoute';
import './common.less';

const history = createHistory();
console.log('history',ConnectedRouter)
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <AuthorizedRoute path="/app" exact component={BaseLayout} />
        <Route path="/auth" component={UnauthorizedLayout} />
        <Route path="/test" render={props=>(<div>test</div>)} />
        {/* <Redirect to="/auth" /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>
)
export default App;