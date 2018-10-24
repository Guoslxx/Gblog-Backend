import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Page
import AllPages from '../pages';

import config from '../utils/config.js';
const { pathPrefix } = config;

class RouterMap extends React.Component {

    getRouteData = (data) => {
        const result = [];
        const mapData = (list) => {
            list.forEach(e => {
                if (e.children) {
                    mapData(e.children);
                    return;
                }
                result.push(e);
            });
        }
        mapData(data);
        return result;
    }



    render() {
        const routeList = this.getRouteData(this.props.config)
        return (
            <Switch>
                <Redirect from={pathPrefix} to={`${pathPrefix}/dashboard`} exact />
                {
                    routeList.map(item => {
                        if (!item.component) return null;

                        const path = pathPrefix + item.path;
                        const Component = AllPages[item.component];
                        return (
                            <Route key={path} path={path} component={Component} exact={item.isExact || true} />
                        )
                    })
                }
                <Route render={() => (<h1>404</h1>)}></Route>
            </Switch>
        );
    }
}
export default RouterMap;