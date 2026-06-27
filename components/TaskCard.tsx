import { Task } from "../store/useStore";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="p-4 bg-gray-700 rounded-lg">
      <h2 className="text-lg">{task.title}</h2>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
}
