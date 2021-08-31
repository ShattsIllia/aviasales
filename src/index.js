import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import cardSlice from './redux/cardSlice';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
      cards: cardSlice,
  },
});

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
