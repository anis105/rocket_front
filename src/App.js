import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, date: '2023-10-12', task: 'Math Homework', completed: false },
        { id: 2, date: '2023-10-12', task: 'Physics Assignment', completed: false },
        { id: 3, date: '2023-10-13', task: 'History Reading', completed: false }
    ]);

    const [newTask, setNewTask] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() && selectedDate) {
            setTodos([...todos, {
                id: Date.now(),
                date: selectedDate,
                task: newTask,
                completed: false
            }]);
            setNewTask('');
            setSelectedDate('');
        }
    };

    return (
        <div>
            {/* The "Add New Task" section */}
            <div>
                <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={(e) => setSelectedDate(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="What's next on your list?"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={handleAddTask}>Bring it on!</button>
            </div>

            {/* Displaying the tasks grouped by date */}
            {Object.entries(todos.reduce((grouped, todo) => {
                (grouped[todo.date] = grouped[todo.date] || []).push(todo);
                return grouped;
            }, {})).map(([date, todosForDate]) => (
                <div key={date}>
                    <h2>{date}</h2>
                    <ul>
                        {todosForDate.map(todo => (
                            <li key={todo.id}>
                                <span 
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                    onClick={() => setTodos(todos.map(t => 
                                        t.id === todo.id ? {...t, completed: !t.completed} : t
                                    ))}
                                >
                                    {todo.task}
                                </span>
                                <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>
                                    I'm done with this!
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
