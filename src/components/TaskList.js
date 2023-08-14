import React from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../store/actions/taskActions";
import { changeTodo } from "../store/actions/taskActions";

const TaskList = () => {
  const storeWrapper = useSelector((state) => state);
  const tasks = storeWrapper.taskReducer;
  const dispatch = useDispatch();

  let [changingTaskText, setChangeTaskText] = useState(false);
  let [changingTaskTextId, setChangeTaskTextId] = useState(0);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const inputRef = useRef(null);

  const handleChange = (id) => {
    if (changingTaskText && id === changingTaskTextId) {
      setChangeTaskTextId(-1);
      dispatch(changeTodo(id, inputRef.current.value));
    } else {
      setChangeTaskTextId(id);
    }

    setChangeTaskText(!changingTaskText);
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks.tasks.length === 0
            ? "there are no tasks registered"
            : tasks.tasks.map((task) => (
                <li className="task" key={task.id}>
                  {!changingTaskText && task.id != changingTaskTextId ? (
                    <h1>{task.text}</h1>
                  ) : (
                    <input
                      type="text"
                      placeholder="Add your task here"
                      ref={inputRef}
                      className="taskInput"
                    />
                  )}
                  <button
                    className="changeBtn"
                    onClick={() => handleChange(task.id, task.text)}
                  >
                    Rename
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(task.id)}
                  >
                    delete
                  </button>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
