function processAddReview(reviewInfo){
    if(Object.keys(reviewInfo).length > 0){
        let curUser = localStorage.getItem('currentUser');
        let reviewEntry = {username: curUser, movieTitle: reviewInfo.movie, review: reviewInfo.review};
        let movieData = JSON.parse(localStorage.getItem('movieData'));
        for(let i=0; i < movieData.length; i++){
            if(movieData[i].movieTitle === reviewInfo.movie){
                movieData[i].reviews.push(reviewEntry);
                break;
            }
        }
        localStorage.setItem('movieData', JSON.stringify(movieData));
    }
    return {}
}

function addReview(state = {}, action){
    switch(action.type){
        case 'ADD_REVIEW':
            return processAddReview(action.reviewInfo);
        default:
            return state
    }
}

export default addReview
