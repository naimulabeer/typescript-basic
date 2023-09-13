import { useState } from "react";
import "./todolist.styles.scss";

interface TodoListProps {
  id: number;
  text: string;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<TodoListProps[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskItem: TodoListProps = {
        id: Date.now(),
        text: newTask,
      };

      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  };

  const removeTask = (id: number) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  return (
    <div className="todolist-container">
      <h1>TodoList App</h1>
      <div className="task-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-show">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input type="checkbox" />
              {task.text}
              <button onClick={() => removeTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
