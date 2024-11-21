import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        background: "#fff",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            style={{ marginRight: "10px" }}
          />
          <strong>{todo.text}</strong>
        </div>
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
      </div>
      <p style={{ margin: "5px 0" }}>{todo.description}</p>
      <small>
        Expected Completion: {todo.expectedCompletion || "Not set"}
      </small>
      {todo.completed && (
        <small>Completed At: {todo.completionTime}</small>
      )}
    </li>
  );
}

export default TodoItem;
