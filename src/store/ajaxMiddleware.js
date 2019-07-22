import axios from 'axios';
import { LOAD_BITCOIN, receivedBitcoin } from 'src/store/reducer';

const url = 'https://api.coindesk.com/v1/bpi/currentprice/EUR.json';

const ajaxMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case LOAD_BITCOIN:
    console.log('coucou');
      // Je veux faire une requête axios
      axios.get(url)
        .then((result) => {

          console.log(result.data.bpi.EUR.rate);
          // J'ai reçu mes recttes dans result.data
          // Je veux informer mon reducer par le biais d'une action
          // Comme je reçois le store en paramètres
          // je peux l'utiliser pour dispatcher.
          // J'ai importé mon action creator receivedRecipes, je l'utilise pour
          // générer l'action avec les recettes dedans
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
