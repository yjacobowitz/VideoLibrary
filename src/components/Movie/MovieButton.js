import React, { Component } from 'react';
import {Button, Col, ButtonGroup} from 'react-bootstrap'
import MovieTag from './MovieTag'
import ReviewQuery from '../Review/ReviewQuery'

let style = {
    main:{
        height:'150px',
        background:"#fffaf4"
    },
    button:{
        background:"white"
    }
};

class MovieButton extends Component {
    constructor(props){
        super(props);
        this.state = {checkout:props.movieObj.checkout, returned:!props.isCheckoutByUser, showReviewModal:false};
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.checkoutRes){
            this.setState({checkout: nextProps.checkoutRes.movie.checkout})
        }else{
            this.setState({checkout: nextProps.movieObj.checkout})
        }
        if(!this.state.returned){
            this.setState({showReviewModal:false})
        }
    }

    closeReviewModal(){
        this.setState({showReviewModal: false });
    }

    renderMovieTags(){
        let movieTags = this.props.movieObj.movieTag;
        let onTagClick = this.props.onTagClick;
        return movieTags.map((tag, idx)=>{
            return <MovieTag tag={tag} key={idx} onTagClick={onTagClick}/>
        })
    }

    onCheckoutClick(){
        this.props.checkout(this.props.movieObj.movieTitle)
        this.setState({returned: !this.state.returned}, ()=>{
            if(this.state.returned){
                this.setState({showReviewModal:true});
            }
        });
    }

    processButtonTask(){
        /**
         * Checks the following options:
         * 1. User checked out movie - show return button
         * 2. Other user checked out movie - no button
         * 3. No one checked out movie - show checkout button
         */
        let buttonTask = "";
        if(this.props.isCheckoutByUser && this.state.checkout){
            buttonTask = <span className="glyphicon glyphicon-repeat pull-right" aria-hidden="true"/>
        }else if(!this.props.isCheckoutByUser && !this.state.checkout){
            buttonTask = <span className="glyphicon glyphicon-shopping-cart pull-right" aria-hidden="true"/>
        }else{
            return <div style={{color:"red"}}>Movie not available</div>;
        }
        return <Button style={style.button} className="pull-right"
                       onClick={this.onCheckoutClick.bind(this)}>
            {buttonTask}</Button>

    }

    render() {
        return (
            <div>
                <Col className="col-xs-4">
                    <div className="thumbnail" style={style.main}>
                            <div className="caption">
                                <div className="title">
                                    {this.processButtonTask()}
                                    <h4>{this.props.movieObj.movieTitle}</h4>
                                </div>
                                <ButtonGroup className="tags">
                                    {this.renderMovieTags()}
                                </ButtonGroup>
                            </div>
                    </div>
                    <ReviewQuery showReviewModal={this.state.showReviewModal} movieTitle={this.props.movieObj.movieTitle}
                                 closeReviewModal={this.closeReviewModal.bind(this)}/>
                </Col>
            </div>
        );
    }
}

export default MovieButton;
