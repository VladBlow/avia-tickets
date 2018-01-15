import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyGlobalStyles } from 'common/styles';
import { configureStore } from 'r/store';
import { App } from './App';

const store = configureStore();

applyGlobalStyles();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
