import React from "react";
import { TodoProvider } from "../components/TodoContext";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";


const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Create Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
