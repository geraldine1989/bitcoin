/**
 * Initial State
 */
const initialState = {
  message: 'Hello',
  clic: 0,
  bitcoin: '',
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
export const LOAD_BITCOIN = 'LOAD_BITCOIN';
export const RECEIVED_BITCOIN = 'RECEVEID_BITCOIN';

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
    case RECEIVED_BITCOIN:
      return {
        ...state,
        bitcoin: action.bitcoin,
      }
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

export const receivedBitcoin = bitcoin => ({
  type: RECEIVED_BITCOIN,
  bitcoin,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
