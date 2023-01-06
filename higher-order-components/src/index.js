import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./components/App";
import Resources from "./components/Resources";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" component={App}>
            <Route path="resources" element={<Resources/>} />
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>
);
