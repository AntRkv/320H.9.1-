import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("");
  const { dispatch } = useContext(TodoContext);

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: "add", payload: newTodo });
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
