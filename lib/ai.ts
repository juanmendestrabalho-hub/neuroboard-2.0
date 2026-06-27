import { Task } from "../store/useStore";

export function generateInsights(tasks: Task[]): string[] {
  const insights: string[] = [];

  const overdue = tasks.filter(t => new Date(t.dueDate) < new Date());

  if (overdue.length > 0) {
    insights.push(`⚠️ ${overdue.length} tarefas atrasadas.`);
  }

  const high = tasks.filter(t => t.priority === "high");
  if (high.length > 3) {
    insights.push("🔥 Muitas tarefas críticas — considere delegar.");
  }

  if (tasks.length === 0) {
    insights.push("🚀 Comece criando sua primeira tarefa.");
  }

  return insights;
}
