import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
// import { createStore } from 'redux';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = configureStore(rootReducers);
root.render(
  // <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  // </Provider>,
);
