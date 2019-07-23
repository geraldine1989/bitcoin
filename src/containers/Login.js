/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Login from 'src/components/Login';

// Action Creators
import { handleLogin } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  loading: state.loggedIn,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLogin: () => {
    dispatch(handleLogin());
  },
});


// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const LoginContainer = createContainer(Login);
*/

/**
 * Export
 */
export default LoginContainer;
