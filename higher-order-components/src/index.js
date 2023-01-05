import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/