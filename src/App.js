import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import store from './store';

import BaseLayout from '@layouts/BaseLayout';
import UnauthorizedLayout from '@layouts/UnauthorizedLayout';
import { HashRouter,BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import AuthorizedRoute from './common/AuthorizedRoute';
import './common.less';

const history = createHistory();
console.log('history',ConnectedRouter)
const App = () => (
  <Provider store={store}>
<<<<<<< HEAD
    <HashRouter>
      <Switch>
        <AuthorizedRoute path="/" exact component={BaseLayout} />
        <Route path="/auth" component={UnauthorizedLayout} />
        <Route path="/test" render={props => (<div>test</div>)} />
        <Redirect to="/auth" />
      </Switch>
    </HashRouter>
=======
    <ConnectedRouter history={history}>
      <Switch>
        <AuthorizedRoute path="/app" exact component={BaseLayout} />
        <Route path="/auth" component={UnauthorizedLayout} />
        <Route path="/test" render={props=>(<div>test</div>)} />
        {/* <Redirect to="/auth" /> */}
      </Switch>
    </ConnectedRouter>
>>>>>>> 927bbc61646c1a3b78c3828af7b28e38e3e18f54
  </Provider>
)
export default App;