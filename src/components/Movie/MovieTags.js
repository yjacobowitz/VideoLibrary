import React, { Component } from 'react';
import {Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
const ALL_MOVIES = "All Movies"

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class MovieTags extends Component {

    constructor() {
        super();
        this.state = {value: [], tagsSelected:[]}
    }

    getTags(){
        let tags = [];
        let movieData = JSON.parse(localStorage.getItem('movieData'))
        for(let i=0; i < movieData.length; i++){
            let movie = movieData[i];
            for(let j=0; j < movie.movieTag.length; j++){
                let tag = movie.movieTag[j];
                if(tags.indexOf(tag) === -1){
                    tags.push(tag);
                }
            }
        }
        tags.sort();
        return tags;
    }

    renderTags(){
        let tags = this.getTags();
        return tags.map(function (tag, idx){
            return  <ToggleButton bsStyle="primary" value={idx} key={idx}>{tag}</ToggleButton>
        });
    }

    onChange = (value) => {
        let tagSelected = [];
        let tags = this.getTags();
        for(let i in value)
            tagSelected.push(tags[value[i]]);
        this.setState({ value, tagSelected});
    };

    onClick(tag) {
        this.setState({value: []});
        this.props.onTagClick(tag)
    }

    render() {
        return (
            <div>
                Select Categories:
                <div className="well" style={wellStyles}>
                    <ToggleButtonGroup type="checkbox" value={this.state.value} onChange={this.onChange}>
                        {this.renderTags()}
                    </ToggleButtonGroup>
                    <Button bsSize="large" block
                            onClick={this.onClick.bind(this, this.state.tagSelected)}>Filter Movies</Button>
                </div>
                <Button bsSize="large" block onClick={this.onClick.bind(this, ALL_MOVIES)}>{ALL_MOVIES}</Button>
            </div>
        );
    }
}

export default MovieTags;
