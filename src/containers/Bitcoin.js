/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Bitcoin from 'src/components/Bitcoin';

// Action Creators
import { doSomething } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  message: state.message,
  clic: state.clic,
  bitcoin: state.bitcoin,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {};

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const BitcoinContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bitcoin);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const BitcoinContainer = createContainer(Bitcoin);
*/

/**
 * Export
 */
export default BitcoinContainer;
