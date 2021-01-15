import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../../redux/actions/todoActions";

const TodoList = ({ tasks, removeTask }) => {
  const onHandleRemove = (e) => {
    removeTask(e.target.id);
  };

  return (
    <ul>
      {tasks.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>{" "}
          <button type="button" id={item.id} onClick={onHandleRemove}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.filter((item) =>
      item.text.toLowerCase().includes(state.filter.toLowerCase())
    ),
  };
};

export default connect(mapStateToProps, { removeTask })(TodoList);
