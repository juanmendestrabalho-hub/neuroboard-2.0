import { create } from "zustand";

export type Task = {
  id: string;
  title: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
};

type Store = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

export const useStore = create<Store>((set) => ({
  tasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task]
    }))
}));
