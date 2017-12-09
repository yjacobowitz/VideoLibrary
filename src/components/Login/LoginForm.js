import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, Col, ControlLabel} from 'react-bootstrap'

const style={
    loginPanel: {
        background: "#f7d788",
        fontFamily:"Verdana",
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    }
};

class LoginForm extends Component {

    signIn(){
        this.props.login(this.emailInput.value)
    }

    render() {
        return (
            <div>
                <Col className="col-lg-4 col-md-offset-4">
                    <div className="panel">
                        <div className="panel-heading" style={style.loginPanel}>Login in to the Online Video Library!</div>
                        <div className="panel-body">
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} sm={2}>Email</Col>
                                    <Col sm={10}>
                                        <FormControl type="email" placeholder="Email" inputRef={input => this.emailInput = input}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={2}>Password</Col>
                                    <Col sm={10}>
                                        <FormControl type="password" placeholder="Password" inputRef={input => this.passwordInput = input}/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="panel-footer">
                            <Button type="submit" onClick={this.signIn.bind(this)}>Sign In</Button>
                        </div>
                    </div>
                </Col>
            </div>
        );
    }
}

export default LoginForm;