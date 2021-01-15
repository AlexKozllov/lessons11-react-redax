import { ADDTASK, REMOVE, SETFILTER } from "../constants/todoConstants";

export const addTask = (task) => {
  return {
    type: ADDTASK,
    payload: task,
  };
};

export const setFilter = (filter) => {
  return {
    type: SETFILTER,
    payload: filter,
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
