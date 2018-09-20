import { VisibilityFilters } from "../actions";
import { combineReducers } from "redux";
import byId, * as fromById from "./byId";
import createList, * as fromList from "./createList";

const listByFilter = combineReducers({
  all: createList(VisibilityFilters.SHOW_ALL),
  active: createList(VisibilityFilters.SHOW_ACTIVE),
  completed: createList(VisibilityFilters.SHOW_COMPLETED)
});

const todos = combineReducers({
  byId,
  listByFilter
});

export default todos;

//selector
export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};
