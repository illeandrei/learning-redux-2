import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import logger from "redux-logger";
import rootReducer from "./reducers";

const configureStore = () => {
  const middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  return createStore(
    rootReducer,
    //this is where you should add the persisted state (if there is one)
    //right before the enhancer (applyMiddleware)
    //persistedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
