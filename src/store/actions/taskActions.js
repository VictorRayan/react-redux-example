import { ADD_TASK } from "../types/taskTypes";
import { DELETE_TASK } from "../types/taskTypes";
import { CHANGE_TASK_TEXT} from "../types/taskTypes";

export const addTodo = (text) => {
  return {
    type: ADD_TASK,
    payload: {
      id: new Date().getTime(),
      text: text,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const changeTodo = (id, text) =>{
  return {
    type: CHANGE_TASK_TEXT,
    payload: {
      id: id, 
      text: text,
    }
  };
}
