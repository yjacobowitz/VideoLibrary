import React, { Component } from 'react';
import MovieList from '../Movie/MovieList'
import {Row, Col, Grid} from 'react-bootstrap'
import MovieTags from '../Movie/MovieTags'
import MovieHeader from './../Movie/MovieHeader'
import ReviewTable from './../Review/ReviewTable'

class MovieSelectionScreen extends Component {

    render() {
        return (
            <div className="movieSelectionScreen">
                <Grid>
                    <Row className="movieSelectionScreenHeader">
                        <MovieHeader logout={this.props.logout}/>
                    </Row>
                    <Row>
                        <Col className="col-sm-8">
                            <MovieList tagMovieList={this.props.state.tagMovieList} onTagClick={this.props.actions.onTagClick}
                                       checkout={this.props.actions.checkout} checkoutRes={this.props.state.checkoutRes}/>
                        </Col>
                        <Col className="col-sm-4">
                            <MovieTags onTagClick={this.props.actions.onTagClick}/>
                            <ReviewTable/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default MovieSelectionScreen;
