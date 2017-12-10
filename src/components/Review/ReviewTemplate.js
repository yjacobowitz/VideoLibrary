import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'

class ReviewTemplate extends Component {
    constructor(){
        super();
        this.state = {value:""}
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    saveReview(movieTitle, review){
        let curUser = localStorage.getItem('currentUser');
        let reviewEntry = {username: curUser, movieTitle: movieTitle, review: review};
        let movieData = JSON.parse(localStorage.getItem('movieData'));
        for(let i=0; i < movieData.length; i++){
            if(movieData[i].movieTitle === movieTitle){
                movieData[i].reviews.push(reviewEntry);
                break;
            }
        }
        localStorage.setItem('movieData', JSON.stringify(movieData));
        this.props.onCloseReview()
    }

    render() {
        return (
            <div>
                <Modal animation={false} show={this.props.showReviewTemplate} onHide={this.props.onCloseReview}>
                    <Modal.Header closeButton>
                        <Modal.Title>Leave Us A Review!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className= "modalStyle">
                        <textarea className="form-control" value={this.state.value} onChange={this.handleChange.bind(this)}
                                  rows="4" placeholder="Your thoughts..."/>
                    </Modal.Body>
                    <Modal.Footer className= "modalStyle">
                        <button className="btn btn-default"
                                onClick={this.saveReview.bind(this, this.props.movieTitle, this.state.value)}>Save
                        </button>
                        <button className="btn btn-default" onClick={this.props.onCloseReview}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ReviewTemplate;
