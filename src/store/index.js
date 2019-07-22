/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'src/store/reducer';
import ajaxMiddleware from './ajaxMiddleware';
/*
 * Local import
 */
// Reducer

const appliedMiddlewares = applyMiddleware(ajaxMiddleware);

/*
 * Code
 */
const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const enhancers = compose(appliedMiddlewares, ...devTools);

// createStore
const store = createStore(rootReducer, enhancers);

/*
 * Export
 */
export default store;
