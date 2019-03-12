import React,{Suspense} from 'react';
import { Route, Switch, Redirect,withRouter } from 'react-router-dom';
// Page
import AllPages from '../pages';
@withRouter
class RouterMap extends React.Component {
    getRoutes = (data) => {
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
        const routeList = this.getRoutes(this.props.routes);
        return (
            <Switch>
                {
                    routeList.map(item => {
                        if (!item.component) return null;
                        const path = item.path;
                        const Component = AllPages[item.component];
                        return (
                            <Route key={path} path={path} component={Component} exact={item.isExact || true} />
                        )
                    })
                }
                <Redirect exact from={`/`} to={`/welcome`} />
                <Route render={() => (<h1>404</h1>)}></Route>
            </Switch>
        );
    }
}
export default RouterMap;