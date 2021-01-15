import React from "react";
import Filter from "../filter/Filter";
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";

const Todo = () => {
  return (
    <div>
      <h2>Todo</h2>
      <TodoForm />
      <Filter />
      <TodoList />
    </div>
  );
};

export default Todo;
