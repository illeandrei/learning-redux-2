//micro module for generatings unique id's
import { v4 } from "node-uuid";
import * as api from "../api";

const receiveTodos = (filter, response) => ({
  type: "RECEIVE_TODOS",
  filter,
  response
});

// this is an asynchronous action creator (returns a promise that resolves to the action obj)
export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response =>
    // receiveTodos returns an action obj synchronously
    receiveTodos(filter, response)
  );

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
