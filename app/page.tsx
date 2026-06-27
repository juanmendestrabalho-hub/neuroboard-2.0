"use client";

import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import InsightPanel from "../components/InsightPanel";
import { useStore } from "../store/useStore";

export default function Home() {
  const tasks = useStore((s) => s.tasks);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">NeuroBoard AI</h1>

      <TaskForm />

      <InsightPanel />

      <div className="grid grid-cols-3 gap-4">
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
      </div>
    </main>
  );
}
