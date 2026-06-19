import React from "react";
import TaskCard from "./TaskCard";
import { TaskStatus, useFavorites } from "../../context/FavoritesContext";

type KanbanColumnProps = {
  title: string;
  status: TaskStatus;
};

export default function KanbanColumn({ title, status }: KanbanColumnProps) {
  const { tasks } = useFavorites();

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="column">
      <h2>{title}</h2>

      {filteredTasks.length === 0 ? (
        <p className="empty">No tasks yet</p>
      ) : (
        filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </section>
  );
}
