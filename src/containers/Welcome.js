/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Welcome from 'src/components/Welcome';

// Action Creators
import { signup, signout } from 'src/store/reducer';

// State
const mapStateToProps = (state, ownProps) => ({
  bitcoin: state.bitcoin,
  redirect: state.redirect,
  postdata: state.postdata,
});

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (response) => {
    dispatch(signup(response));
  },
  signout: () => {
    dispatch(signout());
  },
});

// Container
const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

/**
 * Export
 */
export default WelcomeContainer;
