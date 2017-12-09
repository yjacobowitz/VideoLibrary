/**
 * Created by yjacobow on 12/5/2017.
 */
import { combineReducers } from 'redux'
import login from './LoginReducer'
var movieDataReducer = require('./MovieDataReducer')

let movieData =  movieDataReducer.movieData;
let checkoutRes = movieDataReducer.checkoutRes;

const rootReducer = combineReducers({
    movieData,
    checkoutRes,
    login
});

export default rootReducer
