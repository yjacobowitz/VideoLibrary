import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap'
import ReviewTemplate from './ReviewTemplate'

class ReviewQuery extends Component {
    constructor(){
        super();
        this.state = {showReviewTemplate:false};
    }

    onClickYesReview(){
        this.setState({showReviewTemplate:true});
        this.props.closeReviewModal()
    }

    onCloseReview(){
        this.setState({showReviewTemplate:false});
    }

    render() {
        return (
            <div>
                <Modal animation={false} show={this.props.showReviewModal} onHide={this.props.closeReviewModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Leave Us A Review!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Thank you for your recent visit to our website. We want to provide you with the best service
                            possible. Would you consider leaving a review of this movie?</p>
                        <p>It would help other customers learn about the movies we offer.</p>
                        <h4>You have the power!</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="warning" onClick={this.onClickYesReview.bind(this)}>Yes</Button>
                        <Button onClick={this.props.closeReviewModal}>No</Button>
                    </Modal.Footer>
                </Modal>
                <ReviewTemplate showReviewTemplate={this.state.showReviewTemplate} movieTitle={this.props.movieTitle}
                                onCloseReview={this.onCloseReview.bind(this)}/>
            </div>
        );
    }
}

export default ReviewQuery;
