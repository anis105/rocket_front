import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, date: '2023-10-12', task: 'Math Homework', completed: false },
    { id: 2, date: '2023-10-12', task: 'Physics Assignment', completed: false },
    { id: 3, date: '2023-10-13', task: 'History Reading', completed: false }
  ]);

  const [newTask, setNewTask] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const groupedTodos = todos.reduce((acc, todo) => {
    if (!acc[todo.date]) {
      acc[todo.date] = [];
    }
    acc[todo.date].push(todo);
    return acc;
  }, {});

  const handleAddTask = () => {
    if (newTask.trim() && selectedDate) {
      const newTodo = {
        id: Date.now(), // simplistic ID generation
        date: selectedDate,
        task: newTask,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setNewTask('');
      setSelectedDate('');
    }
  };

  const handleDeleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  return (
      <div>
        <div>
          <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
          />
          <input
              type="text"
              placeholder="New Task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        {Object.entries(groupedTodos).map(([date, todosForDate]) => (
            <div key={date}>
              <h2>{date}</h2>
              <ul>
                {todosForDate.map(todo => (
                    <li key={todo.id}>
                                <span
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                    onClick={() => handleToggleCompleted(todo.id)}
                                >
                                    {todo.task}
                                </span>
                      <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
                    </li>
                ))}
              </ul>
            </div>
        ))}
      </div>
  );
}

export default TodoList;
