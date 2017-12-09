import React, { Component } from 'react';
import MovieButton from './MovieButton'
import {Row} from 'react-bootstrap'
const MOVIES_PER_ROW = 3;

const style = {
    overflow:"scroll",
    overflowX:"hidden",
    height: "615px"
};

class MovieList extends Component {

    compare(a,b){
        if (a.movieTitle < b.movieTitle)
            return -1;
        if (a.movieTitle > b.movieTitle)
            return 1;
        return 0;
    }

    returnCheckoutMovies(){
        //returns a list of all the movies that the user checked out
        let curUser = localStorage.getItem('currentUser');
        let users = JSON.parse(localStorage.getItem('users'));
        return users[curUser].checkedOut
    }

    renderMovieListRows(){
        let checkout = this.props.checkout;
        let checkoutRes = this.props.checkoutRes;
        let checkoutMovies = this.returnCheckoutMovies();
        let onTagClick = this.props.onTagClick;

        let movieButtonList = this.props.movieData.sort(this.compare).map(function (obj, idx){
            let isCheckoutByUser = false;
            if(checkoutMovies.indexOf(obj.movieTitle) > -1)
                isCheckoutByUser = true;

            return <MovieButton movieObj={obj} key={idx} checkout={checkout} onTagClick={onTagClick}
                                checkoutRes={checkoutRes} isCheckoutByUser={isCheckoutByUser}/>
        });
        let rows = [];
        for(let i=0; i < movieButtonList.length; i += MOVIES_PER_ROW){
            rows.push(movieButtonList.slice(i, MOVIES_PER_ROW + i));
        }
        return rows
    }


    render() {
        const rows = this.renderMovieListRows();
        return (<div style={style}>{rows.map((row, idx) => (<Row key={idx}>{row}</Row>))}</div>)
    }
}

export default MovieList;
