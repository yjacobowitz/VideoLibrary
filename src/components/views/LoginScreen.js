/**
 * Created by yjacobow on 12/6/2017.
 */
import React, { Component } from 'react';
import {Row} from 'react-bootstrap'
import LoginHeader from './../Login/LoginHeader'
import LoginForm from './../Login/LoginForm'

const style={
    spacing: {height: "50px"},
};

class LoginScreen extends Component {

    componentWillUpdate(nextProps){
        if(nextProps.state.user && nextProps.state.user !== this.props.state.user)
            nextProps.onHide()
    }

    render() {
        return (
            <div>
                <div style={style.spacing}></div>
                <Row>
                    <LoginHeader/>
                </Row>
                <div style={style.spacing}></div>
                <Row>
                    <LoginForm login={this.props.actions.login}/>
                </Row>
            </div>
        );
    }
}

export default LoginScreen;