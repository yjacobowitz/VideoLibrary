import React, { Component } from 'react';
import {Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
const ALL_MOVIES = "All Movies";

class MovieTags extends Component {

    constructor(props) {
        super(props);
        this.props.onTagClick(ALL_MOVIES);
        this.state = {value: []}
    }

    getTags(){
        let tags = [];
        let movieData = JSON.parse(localStorage.getItem('movieData'));
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
            return  <ToggleButton value={idx} key={idx}>{tag}</ToggleButton>
        });
    }

    onChange = (value) => {
        let tagSelected = [];
        let tags = this.getTags();
        for(let i in value)
            tagSelected.push(tags[value[i]]);
        this.setState({ value});
        this.props.onTagClick(tagSelected)
    };

    onClick() {
        this.setState({value: []});
        this.props.onTagClick(ALL_MOVIES)
    }

    render() {
        return (
            <div className="tagWrap">

                <div className="tagTitle">Select Categories:</div>
                <div>
                    <ToggleButtonGroup type="checkbox" value={this.state.value} onChange={this.onChange}>
                        {this.renderTags()}
                    </ToggleButtonGroup>

                </div>
                <div>
                    <Button block bsStyle="warning" className="pull-right"
                            onClick={this.onClick.bind(this)}>Clear</Button>
                </div>
            </div>
        );
    }
}

export default MovieTags;
