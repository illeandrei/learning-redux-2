import { combineReducers } from "redux";
//using the name space import syntax to avoid duplicate variable declaration
import todos, * as fromTodos from "./todos";

export default combineReducers({
  todos
});

//this is a named selector (similar to the one in /reducers/todos.js)
export const getVisibleTodos = (state, filter) =>
  //the state shape of the todos reducer should be encapsulated in the file where it's defined
  fromTodos.getVisibleTodos(state.todos, filter);
