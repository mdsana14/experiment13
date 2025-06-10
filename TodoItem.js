import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        padding: "8px 10px",
        border: "1px solid #ccc",
        borderRadius: 4,
        background: todo.completed ? "#e0ffe0" : "#fff",
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      <span
        style={{ cursor: "pointer", flexGrow: 1 }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          marginLeft: 10,
          padding: "5px 10px",
          background: "#ff4d4d",
          border: "none",
          color: "white",
          borderRadius: 3,
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
