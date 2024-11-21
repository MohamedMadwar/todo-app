import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button type="submit" style={{ padding: "8px 16px", marginLeft: "10px" }}>
        Add
      </button>
    </form>
  );
}

export default AddTodo;
