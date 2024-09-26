import React, { useState } from 'react';
import './App.css'; 

const App = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks((prevTasks) => [
                ...prevTasks,
                { id: Math.random().toString(), value: task, completed: false },
            ]);
            setTask('');
        }
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Add a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        onClick={() => toggleTaskCompletion(task.id)}
                        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    >
                        {task.value}
                        <button onClick={() => removeTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
