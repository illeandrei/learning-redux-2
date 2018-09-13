import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

// the 'match' prop is passed from react-router (different from tutorial - where an older version of react-router is used)
// https://reacttraining.com/react-router/core/api/Route/route-props
const App = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
