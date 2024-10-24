import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now() }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <button onClick={addTodo} style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>
        Add
      </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginTop: '10px' }}>
            {todo.text}
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                marginLeft: '20px',
                padding: '5px 10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

