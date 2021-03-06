
/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { signup } from 'src/store/reducer';

// State

const mapStateToProps = (state, ownProps) => ({
  loginError: state.loginError,
  redirect: state.redirect,
});
// Actions

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (response) => {
    dispatch(signup(response));
  },
});

// Container
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);


/**
 * Export
 */
export default LoginContainer;