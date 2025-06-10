import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        style={{
          padding: 10,
          width: "75%",
          fontSize: 16,
          marginRight: 10,
        }}
      />
      <button type="submit" style={{ padding: "10px 15px", fontSize: 16 }}>
        Add
      </button>
    </form>
  );
}

export default TodoInput;
