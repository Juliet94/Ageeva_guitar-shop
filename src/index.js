import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import {reducer} from './store/reducer';

import App from './components/app/app';

const store = configureStore({
  reducer: reducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
