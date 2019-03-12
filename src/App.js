import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import BaseLayout from '@layouts/BaseLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Authorized } from './common/Authorized';
import './common.less';
import Login from './pages/Login';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route component={Authorized(BaseLayout)} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
export default App;