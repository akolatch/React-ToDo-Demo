import React from 'react';

const Todo = ({ todo, deleteTodo, markDone, idx }) => (
  <li>
    <span
      style={{ textDecoration: todo.done && 'line-through' }}
      onClick={() => markDone(idx)}
    >
      {todo.value}
    </span>
    <button onClick={() => deleteTodo(idx)}>X</button>
  </li>
);

export default Todo;
