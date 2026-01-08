import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();
    if (task === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">To Do</h2>

      <form className="todo-form" onSubmit={addTask}>
        <input
          className="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />

        <button className="todo-button" type="submit">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {tasks.map((t, index) => (
          <li className="todo-item" key={index}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;