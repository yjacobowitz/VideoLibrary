import { connect } from 'react-redux'
import { addReview } from './../../actions/AddReviewAction'
import ReviewTemplate from '../Review/ReviewTemplate'

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addReview: reviewInfo => {
            dispatch(addReview(reviewInfo))
        }
    }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        state: stateProps,
        actions: dispatchProps
    };
};

const ReviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ReviewTemplate);

export default ReviewContainer