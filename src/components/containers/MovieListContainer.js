import { connect } from 'react-redux'
import { getTagMovieList } from '../../actions/GetTagMovieListAction'
import { checkout } from '../../actions/CheckoutAction'
import MovieSelectionScreen from './../views/MovieSelectionScreen'

const mapStateToProps = state => {
    return {
        tagMovieList: state.tagMovieList,
        checkoutRes: state.checkoutRes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTagClick: tag => {
            dispatch(getTagMovieList(tag))
        },
        checkout: movieToCheckout => {
            dispatch(checkout(movieToCheckout))
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

const MovieListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MovieSelectionScreen);

export default MovieListContainer