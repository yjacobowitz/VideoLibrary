import React, { Component } from 'react';
import {Button, Col, ButtonGroup} from 'react-bootstrap'
import MovieTag from './MovieTag'

let style = {
    main:{
        height:'150px',
        background:"#efedd7"
    },
    button:{
        background:"#fcf8e8"
    }

};

class MovieButton extends Component {
    constructor(props){
        super(props);
        this.state = {checkout:props.movieObj.checkout};
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.checkoutRes.success) {
            if (nextProps.checkoutRes.movie.movieTitle === this.props.movieObj.movieTitle) {
                this.setState({checkout: nextProps.checkoutRes.success})
            }
        }
    }

    // componentWillMount(){
    //     this.setState({checkout: this.props.movieObj.checkout})
    // }

    checkoutButtonClick(){

    }

    renderMovieTags(){
        let movieTags = this.props.movieObj.movieTag;
        let onTagClick = this.props.onTagClick;
        return movieTags.map((tag, idx)=>{
            return <MovieTag tag={tag} key={idx} onTagClick={onTagClick}/>
        })
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
            return "";
        }
        return <Button style={style.button} className="pull-right"
                       onClick={this.props.checkout.bind(null, this.props.movieObj.movieTitle)}>
            {buttonTask}</Button>

    }

    render() {
        return (
            <div>
                <Col className="col-xs-4">
                    <div className="thumbnail" style={style.main}>
                            <div className="caption">
                                {this.processButtonTask()}
                                <h4>{this.props.movieObj.movieTitle}</h4>
                                <ButtonGroup>
                                    {this.renderMovieTags()}
                                </ButtonGroup>
                            </div>
                    </div>
                </Col>
            </div>
        );
    }
}

export default MovieButton;
