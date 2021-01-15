import { ADDTASK, SETFILTER } from "../constants/todoConstants";

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
