const createList = filter => {
  return (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case "RECEIVE_TODOS":
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };
};

export default createList;

//adding a public api for accessing the state in form of a selector
//for now it just returns the state but could change in the future
export const getIds = state => state;
