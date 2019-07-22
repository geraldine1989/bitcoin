/**
 * Initial State
 */
const initialState = {
  message: 'Hello',
  clic: 0,
  bitcoin: '9.427,67',
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
const LOAD_BITCOIN = 'LOAD_BITCOIN';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        clic: state.clic + 1,
      };

    case LOAD_BITCOIN:
      return {
        ...state,
      };
    
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

export const loadBitcoin = () => ({
  type: LOAD_BITCOIN,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
