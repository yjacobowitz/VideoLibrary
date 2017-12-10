import { combineReducers } from 'redux'
import login from './LoginReducer'
var movieDataReducer = require('./MovieDataReducer')

let tagMovieList =  movieDataReducer.tagMovieList;
let checkoutRes = movieDataReducer.checkoutRes;

const rootReducer = combineReducers({
    tagMovieList,
    checkoutRes,
    login
});

export default rootReducer
