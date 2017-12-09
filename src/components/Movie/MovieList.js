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

    getUserCheckoutMovies(){
        //returns a list of all the movies that the user checked out
        let curUser = localStorage.getItem('currentUser');
        let users = JSON.parse(localStorage.getItem('users'));
        return users[curUser].checkedOut
    }

    getMovieData(){
        return JSON.parse(localStorage.getItem('movieData')).filter((n) => this.props.tagMovieList.includes(n.movieTitle))
    }

    renderMovieListRows(){
        let checkout = this.props.checkout;
        let checkoutRes = this.props.checkoutRes;
        let userCheckoutMovies = this.getUserCheckoutMovies();
        let onTagClick = this.props.onTagClick;

        let movieButtonList = this.getMovieData().sort(this.compare).map(function (obj, idx){
            let isCheckoutByUser = false;
            if(userCheckoutMovies.indexOf(obj.movieTitle) > -1)
                isCheckoutByUser = true;
            if(checkoutRes.success){
                if(checkoutRes.movie.movieTitle === obj.movieTitle){
                    return <MovieButton movieObj={obj} key={idx} checkout={checkout} onTagClick={onTagClick}
                                        checkoutRes={checkoutRes} isCheckoutByUser={isCheckoutByUser}/>
                }
            }
            return <MovieButton movieObj={obj} key={idx} checkout={checkout} onTagClick={onTagClick}
                                isCheckoutByUser={isCheckoutByUser}/>
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
