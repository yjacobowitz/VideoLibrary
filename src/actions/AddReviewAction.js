export const addReview = reviewInfo => {
    return {
        type: 'ADD_REVIEW',
        reviewInfo: reviewInfo
    }
};