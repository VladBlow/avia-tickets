import { createStore, compose } from 'redux';
import { rootReducer } from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, composeEnhancers());
