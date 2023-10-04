import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/formList.css";

function FormList({ CreateTodo }) {
  const [check, setCheck] = useState("");
  const [input, setInput] = useState("");

  //onchange
  const takeinput = (evt) => {
    setInput(evt.target.value);
  };

  //submit
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (input !== "") {
      const uuid = uuidv4();
      const newTodo = { id: uuid, task: input, completed: true };
      CreateTodo(newTodo);
      setInput("");
    } else {
      setCheck("Vui lòng nhập name todo");
    }
  };
  //Focus
  const handleFocus = (evt) => {
    setCheck("");
  };

  return (
    <div className="form">
      <form className="form-button">
        <label>New todo</label>
        <br />
        <input
          onChange={takeinput}
          placeholder="New Todo"
          type="text"
          className="input-todo"
          value={input}
          onFocus={handleFocus}
        />
        <button className="button-add" onClick={handleSubmit}>
          Add Todo
        </button>
        <p>{check}</p>
      </form>
    </div>
  );
}

export default FormList;
