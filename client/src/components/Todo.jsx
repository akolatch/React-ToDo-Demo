import React from 'react';

const Todo = ({ todo, deleteTodo, markDone }) => (
  <li>
    <span
      style={{ textDecoration: todo.done && 'line-through' }}
      onClick={() => markDone(todo)}
    >
      {todo.value}
    </span>
    <button onClick={() => deleteTodo(todo._id)}>X</button>
  </li>
);

export default Todo;
