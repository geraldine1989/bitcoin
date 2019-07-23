import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DisplayAppOrLoading from 'src/components/DisplayAppOrLoading';


const mapStateToProps = state => ({
  loading: state.loggedIn,
});

const mapDispatchToProps = {};

const DisplayAppOrLoadingContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayAppOrLoading);

export default withRouter(DisplayAppOrLoadingContainer);
