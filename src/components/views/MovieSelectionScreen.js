/**
 * Created by yjacobow on 12/5/2017.
 */
import React, { Component } from 'react';
import MovieList from '../Movie/MovieList'
import {Row, Col, Grid} from 'react-bootstrap'
import MovieTags from '../Movie/MovieTags'
import MovieHeader from './../Movie/MovieHeader'

const style= {
    background: "linear-gradient(to right, #EFEFBB, #D4D3DD)"
};

class MovieSelectionScreen extends Component {

    render() {
        return (
            <div style={style}>
                <Grid>
                    <Row>
                        <MovieHeader logout={this.props.logout}/>
                    </Row>
                    <Row>
                        <Col className="col-sm-8">
                            <MovieList movieData={this.props.state.movieData} onTagClick={this.props.actions.onTagClick}
                                       checkout={this.props.actions.checkout} checkoutRes={this.props.state.checkoutRes}/>
                        </Col>
                        <Col className="col-sm-4">
                            <MovieTags onTagClick={this.props.actions.onTagClick}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default MovieSelectionScreen;
