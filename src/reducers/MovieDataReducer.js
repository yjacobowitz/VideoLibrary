const ALL_MOVIES = "All Movies";
const MAX_MOVIES_TO_CHECKOUT = 5;

function movieTagFilter(movieData){
    let tags = [];
    for(let i=0; i < movieData.length; i++){
        let movie = movieData[i];
        for(let j=0; j < movie.movieTag.length; j++){
            let tag = movie.movieTag[j];
            if(Object.keys(tags).includes(tag)){
                tags[tag].push(movie);
            }else{
                tags[tag] = [];
                tags[tag].push(movie);
            }
        }
    }
    return tags;
}

function getTagMovieList(tagSelected) {
    let movieData = JSON.parse(localStorage.getItem('movieData'));
    let movieTitles = [];
    for(let movie in movieData){
        if(tagSelected === ALL_MOVIES || tagSelected.some(i => movieData[movie].movieTag.includes(i)))
            movieTitles.push(movieData[movie].movieTitle)
    }
    return movieTitles
}

function checkoutMovie(movieToCheckout){
    let user = localStorage.getItem('currentUser');
    let users = JSON.parse(localStorage.getItem('users'));
    let curUser = users[user];
    let movieData = JSON.parse(localStorage.getItem('movieData'));
    let movieIndex = 0;
    let isCheckout = false;
    //Check if movie is already checked out by another user
    for(; movieIndex < movieData.length; movieIndex++){
        if(movieData[movieIndex].movieTitle === movieToCheckout){
            if(movieData[movieIndex].checkout){
                isCheckout = true;
                break;
            }else{
                break;
            }
        }
    }
    //return movie - case where movie is checked out already
    let checkoutIdx =  curUser.checkedOut.indexOf(movieData[movieIndex].movieTitle);
    if(isCheckout && (checkoutIdx > -1)){
        movieData[movieIndex].checkout = false;
        curUser.checkedOut.splice(checkoutIdx, 1);
        users[user] = curUser;
    }else if(isCheckout && (checkoutIdx === -1)){
        return {success: false, movie: null}
    }else{
        //Check if user can checkout movie (max 5)
        if (curUser.checkedOut.length < MAX_MOVIES_TO_CHECKOUT){
            movieData[movieIndex].checkout = true;
            curUser.checkedOut.push(movieToCheckout);
            users[user] = curUser;
        }
        else
            return {success: false, movie: null}
    }
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('movieData', JSON.stringify(movieData));
    return {success: true, movie: movieData[movieIndex]}
}

function checkoutRes(state={success: false, movie: null}, action){
    switch(action.type){
        case 'CHECKOUT':
            return checkoutMovie(action.movie);
        default:
            return state
    }
}

function tagMovieList(state = [], action){
    switch(action.type){
        case 'GET_TAG_MOVIE_LIST':
            return getTagMovieList(action.tagSelected);
        default:
            return state
    }
}

module.exports = {checkoutRes, tagMovieList};
