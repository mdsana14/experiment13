import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  if (todos.length === 0) return <p style={{ textAlign: "center" }}>No todos yet!</p>;

  return (
    <ul style={{ paddingLeft: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
