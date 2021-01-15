import { ADDTASK, REMOVE, SETFILTER } from "../constants/todoConstants";

const initialState = {
  tasks: [],
  filter: "",
};

export const todoReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADDTASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case SETFILTER:
      return { ...state, filter: action.payload };
    case REMOVE:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    default:
      return state;
  }
};
