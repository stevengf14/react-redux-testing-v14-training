import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./components/App";
import Resources from "./components/Resources";
import Welcome from "./components/Welcome";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" exact element={<Welcome />} />
          <Route path="resources" element={<Resources />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
