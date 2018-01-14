import React from 'react';
import { render } from 'react-dom';
import { applyGlobalStyles } from 'common/styles';
import { App } from './App';

applyGlobalStyles();

render(<App />, document.getElementById('root'));
