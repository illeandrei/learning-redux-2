import { VisibilityFilters } from "../actions";
import { combineReducers } from "redux";
import todo from "./todo";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "TOGGLE_TODO":
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
});

export default todos;

//selector
const getAllTodos = state => state.allIds.map(id => state.byId[id]);

// moved from VisibleTodos.js component because this is the place/file that
// knows and is best aware of the state structure and more precisely the state.todos slice of it
// This member will be made a name export
// The convention is that the default export of the file will be the reducer,
// but any named export starting with 'get' is a function that prepares the data to be displayed by the UI.
// This functions are usually called function selectors because they select something from the state
export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return allTodos;
    case VisibilityFilters.SHOW_COMPLETED:
      return allTodos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return allTodos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
