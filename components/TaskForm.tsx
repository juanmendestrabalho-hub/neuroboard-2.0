"use client";

import { useState } from "react";
import { useStore } from "../store/useStore";

export default function TaskForm() {
  const addTask = useStore((s) => s.addTask);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="p-4 bg-gray-800 rounded-xl">
      <input
        className="p-2 text-black"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="p-2 text-black ml-2"
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-500 px-3 py-2 rounded"
        onClick={() => {
          if (!title || !date) return;

          addTask({
            id: crypto.randomUUID(),
            title,
            dueDate: date,
            priority: "medium"
          });

          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
}
