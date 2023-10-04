import React, { useState } from "react";
import "../styles/Todo.css";

function Todo({ todo, isRemove, isUpdate }) {
  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const onRemove = (evt) => {
    isRemove(evt.target.id);
  };
  const toggle = () => {
    setEditing(true);
  };
  const toggleFrom = () => {
    setEditing(!editing);
  };
  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const onSave = (evt) => {
    evt.preventDefault();
    isUpdate(todo.id, task);
    toggleFrom(!editing);
  };

  if (editing) {
    return (
      <div className="Todo">
        <form className="Todo-edit-form">
          <input
            type="text"
            className="inputSave"
            value={task}
            onChange={handleChange}
          />
          <button id={todo.id} className="buttonSave" onClick={onSave}>
            Save
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="todo-list-true">
        <div className="todo-list">
          <h4 className="textTodo">{task}</h4>
          <div className="button">
            <button id={todo.id} className="toggle" onClick={toggle}>
              <div className="image-toggle"></div> 
            </button>
            <button id={todo.id} className="remove" onClick={onRemove}>
              <div className="image-remove"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
