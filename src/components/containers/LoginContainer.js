import { connect } from 'react-redux'
import { login } from './../../actions/LoginAction'
import LoginScreen from '../views/LoginScreen'

const mapStateToProps = state => {
    return {
        user: state.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: username => {
            dispatch(login(username))
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

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(LoginScreen);

export default LoginContainer