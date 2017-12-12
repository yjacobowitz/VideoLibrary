import { combineReducers } from 'redux'
import login from './LoginReducer'
import addReview from './ReviewReducer'
let movieDataReducer = require('./MovieDataReducer');

let tagMovieList =  movieDataReducer.tagMovieList;
let checkoutRes = movieDataReducer.checkoutRes;

const rootReducer = combineReducers({
    tagMovieList,
    checkoutRes,
    login,
    addReview
});

export default rootReducer
