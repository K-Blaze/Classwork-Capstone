import React, { createContext, useContext, useState } from "react";

export type TaskStatus = "todo" | "inProgress" | "done";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  favorite: boolean;
};

type FavoritesContextType = {
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "favorite">) => void;
  deleteTask: (id: number) => void;
  toggleFavorite: (id: number) => void;
  moveTask: (id: number, status: TaskStatus) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Finish homework",
      description: "Complete my coding assignment",
      status: "todo",
      favorite: false,
    },
    {
      id: 2,
      title: "Study React",
      description: "Practice components and props",
      status: "inProgress",
      favorite: true,
    },
  ]);

  const addTask = (task: Omit<Task, "id" | "favorite">) => {
    setTasks((prev) => [
      ...prev,
      {
        ...task,
        id: Date.now(),
        favorite: false,
      },
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleFavorite = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, favorite: !task.favorite } : task
      )
    );
  };

  const moveTask = (id: number, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ tasks, addTask, deleteTask, toggleFavorite, moveTask }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
};
