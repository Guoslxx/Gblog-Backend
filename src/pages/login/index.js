import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//test code
import { requestLogin } from '../../store/action/loggedUserAction'

import config from '../../utils/config.js';
const { pathPrefix } = config;

class Login extends React.Component {

    loginClick() {
        const { history } = this.props;
        this.props.dispatch(requestLogin())
        .then(res => {
            history.push(pathPrefix)
        })
    }

    render() {
        const {logged} = this.props;
        if(logged){
            return (<Redirect to={pathPrefix}/>);
        }
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
const mapDispatchToprops = dispatch => ({dispatch})
export default connect(mapStateToProps, mapDispatchToprops)(Login);