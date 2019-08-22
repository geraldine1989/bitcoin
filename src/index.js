/**
 * import : npm
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadBitcoin } from 'src/store/reducer';

/**
 * import : local
 */
import store from 'src/store';
import App from 'src/containers/App';


/**
 * Render - Rendu d'un composant React dans le DOM
 */

const rootComponent = (
  
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

render(rootComponent, target);
store.dispatch(loadBitcoin());

