import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Article from '../pages/article';
import Dashboard from '../pages/dashboard';

const RouterMap = () => (
    <Switch>
        <Route path="/article" component={Article} exact/>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/dashboard" exact={true} />
        <Route render={()=>(<h1>404</h1>)}></Route>
    </Switch>
);

export default RouterMap;