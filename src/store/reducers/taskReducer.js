import { DELETE_TASK } from "../types/taskTypes";
import { ADD_TASK } from "../types/taskTypes";
import { CHANGE_TASK_TEXT } from "../types/taskTypes";

const initialState = { tasks: [] };

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case CHANGE_TASK_TEXT:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
