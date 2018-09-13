//micro module for generatings unique id's
import { v4 } from "node-uuid";

export const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

export const addTodo = text => ({
  type: "ADD_TODO",
  id: v4(),
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "all",
  SHOW_COMPLETED: "completed",
  SHOW_ACTIVE: "active"
};
