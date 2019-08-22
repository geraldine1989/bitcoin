import axios from 'axios';
import { LOAD_BITCOIN, receivedBitcoin } from 'src/store/reducer';

const url = 'https://api.coindesk.com/v1/bpi/currentprice/EUR.json';

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_BITCOIN:
      axios.get(url)
        .then((result) => {
          store.dispatch(receivedBitcoin(result.data.bpi.EUR.rate));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
