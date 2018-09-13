import React from "react";
//the link component was moved to react-router-dom packages (different from tutorial)
import { Link } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === "all" ? "" : filter}
    // activeStyle={{
    //   textDecoration: "none",
    //   color: "black"
    // }}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </Link>
);

export default FilterLink;
