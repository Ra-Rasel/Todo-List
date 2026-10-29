import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");


  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

 
  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

 
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

 
  const remainingTasks = tasks.filter((item) => !item.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-1 text-center">My Todo List</h1>
        <p className="text-gray-500 text-sm mb-2 text-center">Keep Track your daily tasks</p>
        
       
        <p className="text-sm text-blue-600 font-medium mb-4 text-center">
          Remaining Tasks: {remainingTasks}
        </p>
        
       
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new Task..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
          className="bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition"
          >
            Add
          </button>
        </div>

       
        <ul className="space-y-2">
          {tasks.map((item) => (
            <li 
              key={item.id} 
              className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg flex justify-between items-center text-gray-700"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTask(item.id)}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className={item.completed ? "line-through text-gray-400" : ""}>
                  {item.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(item.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}