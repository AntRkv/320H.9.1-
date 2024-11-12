import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: "toggle", payload: todo.id })}
      />
      {editMode ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch({
                type: "edit",
                payload: { id: todo.id, title: editText },
              });
              setEditMode(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          {todo.title}
          <button onClick={() => setEditMode(true)} disabled={todo.completed}>
            Edit
          </button>
          <button
            onClick={() => dispatch({ type: "delete", payload: todo.id })}
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;