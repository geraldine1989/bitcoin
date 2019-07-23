/**
 * Initial State
 */
const initialState = {
  message: 'Hello',
  clic: 0,
  bitcoin: '',
  loggedIn: false,
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';
export const LOAD_BITCOIN = 'LOAD_BITCOIN';
export const RECEIVED_BITCOIN = 'RECEVEID_BITCOIN';
const HANDLE_LOGIN = 'HANDLE_LOGIN';

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
      };
    case HANDLE_LOGIN:
      if (state.loggedIn === true) {
        return {
          ...state,
          loggedIn: false,
        };
      }
      return {
        ...state,
        loggedIn: true,
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

export const receivedBitcoin = bitcoin => ({
  type: RECEIVED_BITCOIN,
  bitcoin,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;