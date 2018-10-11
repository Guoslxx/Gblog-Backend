import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
//test code
import store from '../../store';

class Login extends React.PureComponent {

    componentDidMount() {
        const { logged, history } = this.props;
        console.log('loginPage', logged)
        if(logged){
            history.push('/');
        }
    }

    login() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const res = store.dispatch({
                    type: 'SET_LOGGED_USER',
                    logged: true
                })
                resolve(res);
            }, 500);
        })
    }

    loginClick() {
        const { history } = this.props;
        this.login()
            .then(res => {
                console.log('login result', res);
                console.log(this.props)
                history.push('/')
            })
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

export default connect(({ loggedUser }) => ({ logged: loggedUser.logged, padding: loggedUser.padding }))(Login);