import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [expectedCompletion, setExpectedCompletion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, description, expectedCompletion);
    setText("");
    setDescription("");
    setExpectedCompletion("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Task title..."
        style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description..."
        style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
      />
      <input
        type="datetime-local"
        value={expectedCompletion}
        onChange={(e) => setExpectedCompletion(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Add
      </button>
    </form>
  );
}

export default AddTodo;
