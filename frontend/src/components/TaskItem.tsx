import type { Task } from "../models/task.model";

interface TaskItemProps {
    task: Task;
}
export const TaskItem = ({ task } : TaskItemProps) => {

    const formatDate = (date: string) => {
    const [year, month, day] = date
        .slice(0, 10)
        .split('-')
        .map(Number);

    return new Date(year, month - 1, day).toLocaleDateString();
    };

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.completed ? "Complete" : "Pending"}</p>
            <p>Priority: {task.priority}</p>

            {task.dueDate && (
                <p>Due Date: {formatDate(task.dueDate)}</p>
            )}
        </div>
    )
}