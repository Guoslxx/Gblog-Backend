import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import store from '../store'
const stateToProps = ({ loggedUser }) => ({
  pending: loggedUser.pending,
  logged: loggedUser.logged
})
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