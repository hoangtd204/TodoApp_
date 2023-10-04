import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import FormList from "./formList";
import "../styles/TodoList.css";

function TodoList() {
  const myUUID = uuidv4();
  const isUUID = uuidv4();
  const [todos, setTodos] = useState([
    { id: myUUID, task: "Tăng Đức Hoàng" },
    { id: isUUID, task: "Tăng Đức Bảo" },
  ]);

  //Create
  const create = (addTodo) => {
    setTodos([...todos, addTodo]);
  };

  //remove
  const remove = (evt) => {
    setTodos(todos.filter((todo) => todo.id !== evt));
  };
  //update
  const update = (id, updateTask) => {
    const UpdateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    setTodos(UpdateTodos);
  };
  //list
  const todolist = todos.map((todo) => (
    <Todo key={todo.id} isRemove={remove} todo={todo} isUpdate={update} />
  ));

  return (
    <div className="child-app">
      <h1 className="head-todo">
        Todo List <br /> <span>A simple React Todo List App</span>
      </h1>
      <hr />
      <div className="list">{todolist}</div>
      <FormList CreateTodo={create} />
    </div>
  );
}
export default TodoList;
