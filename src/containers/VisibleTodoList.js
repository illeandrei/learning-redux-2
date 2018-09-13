import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { withRouter } from "react-router-dom";
import TodoList from "../components/TodoList";
import { getVisibleTodos } from "../reducers";

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || "all")
});

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   }
// });

// 'withRouter' is used to get access to the router/url params
export default withRouter(
  connect(
    mapStateToProps,
    // mapDispatchToProps
    // if the arguments passed to the callback props match the arguments passed to the action
    // creator, then we can use this shorthand version of mapping dispatch to props
    { onTodoClick: toggleTodo }
  )(TodoList)
);
