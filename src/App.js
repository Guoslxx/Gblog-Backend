import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import BaseLayout from '@layouts/BaseLayout';
import UnauthorizedLayout from '@layouts/UnauthorizedLayout';
import { BrowserRouter, Switch, Redirect, Route,withRouter } from 'react-router-dom';
import AuthorizedRoute from './common/AuthorizedRoute';
import './common.less';
import config from './utils/config';
const { pathPrefix } = config;

// const App = () => (
//   <Provider store={store}>
//     <BrowserRouter>
//       <Switch>
//         <AuthorizedRoute path={pathPrefix} component={BaseLayout} />
//         <Route path="/auth" component={UnauthorizedLayout} />
//         <Redirect to="/auth" />
//       </Switch>
//     </BrowserRouter>
//   </Provider>
// )
@withRouter
class Login extends PureComponent{
  constructor(props){
    super(props);
      const _isLogin = window.localStorage.getItem('lg') || false;
      console.log('login',_isLogin,props);
      this.state = {
        isLogin: _isLogin
      }
  }
  handleSubmit(){
    window.localStorage.setItem('lg',true);
    console.log(this.props)
    this.props.history.push('/');
  }
  render(){
    return (<button onClick={e => {this.handleSubmit(e)}}>登录</button>)
  }
}
const verify = Comp => {
  return class realComponent extends PureComponent {
    constructor(props) {
      super(props);
      const _isLogin = window.localStorage.getItem('lg') || false;
      console.log('verify',_isLogin)
      this.state = {
        isLogin: _isLogin
      }
    }
    render() {
      const { isLogin } = this.state;

      if(isLogin){
        return <Comp {...this.props}/>
      }else{
        return <Redirect to='/login' />
      }
    }
  }
}
const successComp = props => (
  <h1>已登录
    <button onClick={e => {console.log('su',props);window.localStorage.removeItem('lg');props.history.push('/')}}>登出</button>
  </h1>
);
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route component={verify(successComp)} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
export default App;