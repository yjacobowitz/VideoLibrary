import React, { Component } from 'react'
import {Button, PageHeader, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';

const style={
    title:{
        fontFamily:"Arial Black",
    },
    user:{
        fontFamily:"Verdana"
    }
};

class MovieHeader extends Component {

    logout(){
        this.props.logout()
    }

    getCurrentUser(){
        return localStorage.getItem('currentUser')
    }

    render() {
        return (
        <div>
            <PageHeader>
                <Row>
                    <Col className="col-sm-4 pull-left">
                        <small style={style.user}>Welcome {this.getCurrentUser()}!</small>
                    </Col>
                    <Col className="col-sm-5">
                        <div style={style.title}>Movie Selection</div>
                    </Col>
                    <Col className="col-sm-3">
                        <Button className="pull-right" onClick={this.logout.bind(this)}>Logout</Button>
                    </Col>
                </Row>
            </PageHeader>
        </div>
        );
    }
}

export default connect()(MovieHeader);
