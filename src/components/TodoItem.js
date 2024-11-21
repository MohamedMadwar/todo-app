import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ marginRight: "10px" }}
      />
      <span style={{ flex: 1 }}>{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
