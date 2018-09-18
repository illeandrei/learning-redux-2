import { VisibilityFilters } from "../actions";
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_TODOS":
      const nextState = { ...state };
      action.response.forEach(todo => {
        //this operation is a mutation
        //but that is ok in this case because newState is a shallow copy of the original state
        //and the assignment only happens one level deep
        //so the function stays pure
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  if (action.filter !== VisibilityFilters.SHOW_ALL) {
    return state;
  }
  switch (action.type) {
    case "RECEIVE_TODOS":
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  if (action.filter !== VisibilityFilters.SHOW_ACTIVE) {
    return state;
  }
  switch (action.type) {
    case "RECEIVE_TODOS":
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const completedIds = (state = [], action) => {
  if (action.filter !== VisibilityFilters.SHOW_COMPLETED) {
    return state;
  }
  switch (action.type) {
    case "RECEIVE_TODOS":
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds
});

const todos = combineReducers({
  byId,
  idsByFilter
});

export default todos;

// moved from VisibleTodos.js component because this is the place/file that
// knows and is best aware of the state structure and more precisely the state.todos slice of it
// This member will be made a name export
// The convention is that the default export of the file will be the reducer,
// but any named export starting with 'get' is a function that prepares the data to be displayed by the UI.
// This functions are usually called function selectors because they select something from the state
export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};
