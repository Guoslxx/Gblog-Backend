import React, { PureComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../store'
class AuthorizedRoute extends React.Component {

  componentWillMount() {
    this.getLoggedUser()
  }
  getLoggedUser = () => {
    setTimeout(() => {
      store.dispatch({
        type: 'GET_LOGGED_USER'
      })
    }, 500)
  }
  render() {
    const { component: Component, pending, logged, ...rest } = this.props
    //console.log(logged, pending)
    return (
      <Route {...rest}
        render={props => {
          //if (pending) return <div>Loading...</div>
          //return <Component {...props} />
          // console.log('authorized',logged)
          return logged
            ? <Component {...props} />
            : <Redirect to="/auth/login" />
        }} />
    )
  }
}

const stateToProps = ({ loggedUser }) => ({
  pending: loggedUser.pending,
  logged: loggedUser.logged
})

export default connect(stateToProps)(AuthorizedRoute);

export const Authorized = Component => {
  @connect(stateToProps)
  class RealComponent extends PureComponent {
    constructor(props) {
      super(props);
      const _isLogin = window.localStorage.getItem('lg') || false;
      this.state = {
        isLogin: _isLogin
      }
    }
    componentDidMount() {
      this.getLoggedUser()
    }

    getLoggedUser = () => {
      setTimeout(() => {
        store.dispatch({
          type: 'GET_LOGGED_USER'
        })
      }, 500)
    }

    render() {
      const { isLogin } = this.state;

      if (isLogin) {
        return <Component {...this.props} />
      } else {
        return <Redirect to='/login' />
      }
    }
  }
  return RealComponent;
}