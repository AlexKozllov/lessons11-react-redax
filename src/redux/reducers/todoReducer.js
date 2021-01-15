import { ADDTASK, SETFILTER } from "../constants/todoConstants";

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
    default:
      return state;
  }
};
