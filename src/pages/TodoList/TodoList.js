import React, {useEffect, useState} from 'react';
import './TodoList.css';

function TodoList() {
    const initialTodos = [
        {
            id: 1,
            date: '2023-11-25',
            task: 'Math Homework',
            completed: false,
            priority: 'High',
            notes: 'Chapter 5 and 6'
        },
        {
            id: 2,
            date: '2023-11-26',
            task: 'Physics Assignment',
            completed: true,
            priority: 'Medium',
            notes: 'Experiment report'
        },
        {
            id: 3,
            date: '2023-11-27',
            task: 'History Reading',
            completed: false,
            priority: 'Low',
            notes: 'Read pages 101-120'
        }
    ];

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : initialTodos;
    });

    const [newTask, setNewTask] = useState('');
    const [newPriority, setNewPriority] = useState('Medium');
    const [newNotes, setNewNotes] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showLogin, setShowLogin] = useState(false);  // State for controlling login modal visibility

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTask = () => {
        if (newTask.trim() && selectedDate) {
            setTodos([...todos, {
                id: Date.now(),
                date: selectedDate,
                task: newTask,
                completed: false,
                priority: newPriority,
                notes: newNotes
            }]);
            setNewTask('');
            setNewPriority('Medium');
            setNewNotes('');
            setSelectedDate('');
        }
    };

    const filteredTodos = searchTerm.length === 0 ? todos : todos.filter(todo =>
        todo.task.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedTodos = filteredTodos.reduce((grouped, todo) => {
        (grouped[todo.date] = grouped[todo.date] || []).push(todo);
        return grouped;
    }, {});

    return (
        <div className="app-container">
            <div className="TodoList-container">
                {/* Login Modal */}
                {showLogin && (
                    <div className="login-modal">
                        <div className="login-content">
                            <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
                            <h2>Login</h2>
                            <h3>Welcome Terps!</h3>
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>
                            <button onClick={() => console.log('Perform login')}>Login</button>
                        </div>
                    </div>
                )}
                {/* Add New Task Section */}
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
                    <select
                        value={newPriority}
                        onChange={(e) => setNewPriority(e.target.value)}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <textarea
                        placeholder="Add notes here"
                        value={newNotes}
                        onChange={(e) => setNewNotes(e.target.value)}
                    />
                    <button onClick={handleAddTask}>Bring it on!</button>
                </div>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search tasks"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Displaying Tasks Grouped by Date */}
                {Object.entries(groupedTodos).map(([date, todosForDate]) => (
                    <div key={date}>
                        <h2 className="date-header">{date}</h2>
                        <ul>
                            {todosForDate.map(todo => (
                                <li key={todo.id}>
                                <span
                                    className={todo.completed ? 'completed' : ''}
                                    onClick={() => setTodos(todos.map(t =>
                                        t.id === todo.id ? {...t, completed: !t.completed} : t
                                    ))}
                                >
                                    {todo.task} (Priority: {todo.priority})
                                </span>
                                    <div className="task-notes">{todo.notes}</div>
                                    <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>
                                        I'm done with this!
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
