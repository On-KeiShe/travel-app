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
    <div>
      <h2>To Do</h2>

      <form onSubmit={addTask}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;