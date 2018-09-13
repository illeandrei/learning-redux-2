import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import App from "./App";

// any parameter that ends with a question mark will be treated as optional (different from tutorial)
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
);

export default Root;
