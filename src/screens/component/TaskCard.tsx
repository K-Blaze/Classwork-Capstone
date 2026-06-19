import React from "react";
import { Task, TaskStatus, useFavorites } from "../../context/FavoritesContext";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  const { deleteTask, toggleFavorite, moveTask } = useFavorites();

  return (
    <div className="task-card">
      <div className="task-top">
        <h3>{task.title}</h3>

        <button onClick={() => toggleFavorite(task.id)} className="star-btn">
          {task.favorite ? "★" : "☆"}
        </button>
      </div>

      <p>{task.description}</p>

      <select
        value={task.status}
        onChange={(e) => moveTask(task.id, e.target.value as TaskStatus)}
      >
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}
