export const getTagMovieList = tagSelected => {
    return {
        type: 'GET_TAG_MOVIE_LIST',
        tagSelected: tagSelected
    }
};