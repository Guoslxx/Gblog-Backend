import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Page
import Article from '../pages/article';
import Dashboard from '../pages/dashboard';
const RouterMap = () => (
    <Switch>
        <Redirect from="/" to="/dashboard" exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/article" component={Article} exact />
        <Route render={() => (<h1>404</h1>)}></Route>
    </Switch>
);

export default RouterMap;