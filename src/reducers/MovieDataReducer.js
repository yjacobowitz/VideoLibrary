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
    if(tagSelected === ALL_MOVIES || tagSelected === undefined || tagSelected.length === 0)
        return movieData;
    let tagMovieList = [];
    let tagFiltered = movieTagFilter(movieData);
    for(let i=0; i < tagSelected.length; i++){
        tagMovieList = tagMovieList.concat(tagFiltered[tagSelected[i]])
    }
    let remove_dup = tagMovieList.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
    return remove_dup
}

function checkoutMovie(movieToCheckout){
    let user = localStorage.getItem('currentUser');
    let users = JSON.parse(localStorage.getItem('users'));
    let curUser = users[user]
    let movieData = JSON.parse(localStorage.getItem('movieData'));
    let movieIndex = 0;
    //Check if movie is already checked out by another user
    for(; movieIndex < movieData.length; movieIndex++){
        if(movieData[movieIndex].movieTitle === movieToCheckout){
            if(movieData[movieIndex].checkout){
                return {success: false, movie: null}
            }else{
                break;
            }
        }
    }
    //Check if user can checkout movie (max 5)
    if(curUser.username === user){
        if (curUser.checkedOut.length < MAX_MOVIES_TO_CHECKOUT) {
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

function movieData(state = [], action){
    switch(action.type){
        case 'GET_TAG_MOVIE_LIST':
            return getTagMovieList(action.tagSelected);
        default:
            return state
    }
}

module.exports = {checkoutRes, movieData};
