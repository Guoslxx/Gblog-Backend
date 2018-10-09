import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Article from '../pages/article';

const RouterMap = () => (
    <Switch>
        <Route path="/article" component={Article} exact/>
        <Route path="/dashboard" render={() => (<h1>dashboard</h1>)} />
        <Redirect from="/" to="/dashboard" exact={true} />
        <Route render={()=>(<h1>404</h1>)}></Route>
    </Switch>
);

export default RouterMap;