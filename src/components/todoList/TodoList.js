import React from "react";
import { connect } from "react-redux";

const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

const mstp = (state) => {
  return {
    tasks: state.tasks.filter((item) =>
      item.text.toLowerCase().includes(state.filter.toLowerCase())
    ),
  };
};

export default connect(mstp)(TodoList);
