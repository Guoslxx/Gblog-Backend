import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Page
import Article from '../pages/article';
import Dashboard from '../pages/dashboard';
const RouterMap = () => (
    <Switch>
        <Redirect from="/app" to="/app/index" exact={true} />
        <Route path="/app/index" component={Dashboard} />
        <Route path="/app/article" component={Article} exact />
        <Route path="/app/test" component={Article} exact />
        <Route render={() => (<h1>404</h1>)}></Route>
    </Switch>
);

export default RouterMap;