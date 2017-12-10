import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

const style = {
    background:"white"
};

class MovieTag extends Component {

    render() {
        return (
            <Button bsSize="small" style={style} onClick={this.props.onTagClick.bind(this, [this.props.tag])}>
                {this.props.tag}
            </Button>
        );
    }
}

export default MovieTag;
