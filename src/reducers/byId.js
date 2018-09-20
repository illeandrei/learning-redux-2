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

export default byId;

//this is a named export/selector
export const getTodo = (state, id) => state[id];
