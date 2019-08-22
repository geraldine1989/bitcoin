import axios from 'axios';

import { Push } from 'react-router-redux';

import { signup, SIGN_UP } from './store/reducer';

const PostData = store => next => (action) => {
  switch (action.type) {
    case SIGN_UP:
      axios.post('https://www.googleapis.com/oauth2/v3/tokeninfo?')
        .then((response) => {
          console.log(response);
          store.dispatch(signup(response.data));
          store.dispatch(Push('/Welcome'));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};
export default PostData;
