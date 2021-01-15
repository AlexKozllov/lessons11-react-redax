import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions/todoActions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  text: "",
};

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { value } = e.target;
    setTask({ ...task, text: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: uuidv4() });
    setTask({ ...initialState });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text" onChange={onHandleChange} value={task.text} />
      <button type="submit">Add task</button>
    </form>
  );
};

export default connect(null, { addTask })(TodoForm);
