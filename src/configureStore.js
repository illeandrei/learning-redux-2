import { createStore } from "redux";
import rootReducer from "./reducers";

const logger = store => next => {
  if (!console.group) {
    return next;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = next(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

// this is just a function with several arguments that applied as they become available
const promise = store => next => action => {
  console.log("action:", action);

  if (typeof action.then === "function") {
    //wait for the promise to resolve to an action object that we pass to next
    return action.then(next);
  }
  return next(action);
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  //fix the order in which the middlewares are specified
  //it would be more natural to speficy the order in which the action propagates through the middleware
  middlewares
    .slice()
    .reverse()
    .forEach(middleware => {
      store.dispatch = middleware(store)(store.dispatch);
    });
};

const configureStore = () => {
  const store = createStore(rootReducer);
  //store.dispatch got replaced with an array of functions called 'middlewares'
  const middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  //the purpose of the middlewares is to replace the single dispatch function with
  //a chain of disposable dispatch functions which each do something with an action
  wrapDispatchWithMiddlewares(store, middlewares);

  return store;
};

export default configureStore;
