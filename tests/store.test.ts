import { describe, it, expect } from "vitest";
import { generateInsights } from "../lib/ai";

describe("AI Insights", () => {
  it("detecta tarefas atrasadas", () => {
    const insights = generateInsights([
      {
        id: "1",
        title: "Test",
        dueDate: "2000-01-01",
        priority: "low"
      }
    ]);

    expect(insights.length).toBeGreaterThan(0);
  });
});
