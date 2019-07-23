import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DisplayAppOrLoading from 'src/components/DisplayAppOrLoading';
import { loginSubmit } from 'src/store/reducer';


const mapStateToProps = state => ({
  loading: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
    loginSubmit: () => {
      dispatch(loginSubmit());
    },
  });

const DisplayAppOrLoadingContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayAppOrLoading);

export default withRouter(DisplayAppOrLoadingContainer);
