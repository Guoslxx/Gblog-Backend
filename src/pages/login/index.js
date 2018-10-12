import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
//test code
import { requestLogin } from '../../store/action/loggedUserAction'

class Login extends React.PureComponent {

    componentDidMount() {
        const { logged, history } = this.props;
        console.log('loginPage', this.props)
        if (logged) {
            history.push('/');
        }
    }

    login() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const res = this.props.dispatch({
                    type: 'SET_LOGGED_USER',
                    logged: true
                })
                resolve(res);
            }, 500);
        })
    }
    loggedFunc() {
        const self = this;
        const { history } = this.props;
        return function (dispatch) {
            return self.login()
                .then(res => {
                    console.log('login result', res);
                    history.push('/')
                })
        }
    }
    loginClick() {
        // this.login()
        //     .then(res => {
        //         console.log('login result', res);
        //         console.log(this.props)
        //         history.push('/')
        //     })
        this.props.dispatch(this.loggedFunc())
    }

    render() {
        return (
            <div>
                <div style={{ width: '60%', margin: '0 auto', padding: '45px' }}>
                    <h1 style={{ textAlign: 'center' }}>登录页面</h1>
                    <p>
                        <Button type='primary' onClick={() => { this.loginClick() }}>登录</Button>
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ loggedUser }) => ({ logged: loggedUser.logged, padding: loggedUser.padding })
const mapDispatchToprops = dispatch => ({ dispatch })
export default connect(mapStateToProps, mapDispatchToprops)(Login);