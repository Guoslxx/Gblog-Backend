import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
//test code
import { requestLogin } from '../../store/action/loggedUserAction'

class Login extends React.Component {

    loginClick() {
        // this.login()
        //     .then(res => {
        //         console.log('login result', res);
        //         console.log(this.props)
        //         history.push('/')
        //     })
        this.props.dispatch(requestLogin())
        
    }

    checkLogin(){
        const { history,logged } = this.props;
        console.log('checkLogin', logged);
        const localLogged = window.localStorage.getItem('login');
        console.log(localLogged)
        if (logged) {
            //history.push('/app');
        }
    }
    
    componentDidMount(){
        this.checkLogin();
    }

    componentDidUpdate (){
        this.checkLogin();
    }

    render() {
        console.log('login',this.props)
        return (
            <div>
                <div style={{ width: '60%', margin: '0 auto', padding: '45px' }}>
                    <h1 style={{ textAlign: 'center' }}>登录页面</h1>
                    <p>
                        <Button type='primary' onClick={() => { this.loginClick() }}>登录</Button>
                        <Button type='primary' onClick={() => { this.props.history.push('/test') }}>到test</Button>
                        <Button type='primary' onClick={() => { this.props.history.push('/app') }}>到app</Button>
                    </p>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = ({ loggedUser }) => ({ logged: loggedUser.logged, padding: loggedUser.padding })
const mapDispatchToprops = dispatch => ({dispatch})
export default connect(mapStateToProps, mapDispatchToprops)(Login);