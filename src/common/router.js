import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Article from '../pages/article';
import Dashboard from '../pages/dashboard';
import PageLayout from '@layouts/PageLayout';

const RouterMap = () => (
    <Switch>
        <Route path="/" component={PageLayout}>
            <Route path="dashboard" component={Dashboard} onEnter={() => { console.log('enter') }} />
        </Route>
        {/* <Route path="/" /> */}
        {/* <Route path="/dashboard" component={Dashboard} onEnter={()=>{console.log('enter')}}/>
        <Route path="/article" component={Article} exact/>
        <Redirect from="/" to="/dashboard" exact={true} />
        <Route render={()=>(<h1>404</h1>)}></Route> */}
    </Switch>
);

export default RouterMap;