"use client";

import { useStore } from "../store/useStore";
import { generateInsights } from "../lib/ai";

export default function InsightPanel() {
  const tasks = useStore((s) => s.tasks);

  const insights = generateInsights(tasks);

  return (
    <div className="p-4 bg-purple-800 rounded-xl">
      <h2 className="text-xl mb-2">AI Insights</h2>
      {insights.map((i, idx) => (
        <p key={idx}>{i}</p>
      ))}
    </div>
  );
}
