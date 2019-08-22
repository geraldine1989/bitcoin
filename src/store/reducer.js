/**
 * Initial State
 */
const initialState = {
  bitcoin: '',
  redirect: false,
  postdata: {}, 
};

/**
 * Types
 */
export const LOAD_BITCOIN = 'LOAD_BITCOIN';
export const RECEIVED_BITCOIN = 'RECEVEID_BITCOIN';
export const SIGN_UP = 'SIGN_UP';
const SIGNOUT = 'SIGNOUT';


/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  const { postdata } = state;
  switch (action.type) {
    case LOAD_BITCOIN:
      return {
        ...state,
      };
    case RECEIVED_BITCOIN:
      return {
        ...state,
        bitcoin: action.bitcoin,
      };
    case SIGN_UP:
      if (action.response.w3.U3) {
        postdata.name = action.response.w3.ig,
        postdata.provider = 'google',
        postdata.email= action.response.w3.U3,
        postdata.provider_id= action.response.El,
        postdata.token= action.response.Zi.access_token,
        postdata.provider_pic= action.response.w3.Paa
        }
      return {
        ...state,
        ...postdata,
        redirect: true,
      };
    case SIGNOUT:
      return {
        ...state,
        redirect: false,
        postdata: {},
        name: '',
        provider: '',
        email: '',
        provider_id: '',
        token: '',
        provider_pic: '',
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const loadBitcoin = () => ({
  type: LOAD_BITCOIN,
});

export const receivedBitcoin = bitcoin => ({
  type: RECEIVED_BITCOIN,
  bitcoin,
});

export const signup = response => ({
  type: SIGN_UP,
  response,
});

export const signout = () => (
  {
    type: SIGNOUT,
  }
);


/**
 * Export
 */
export default reducer;
