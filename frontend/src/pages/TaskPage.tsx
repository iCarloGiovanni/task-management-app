import { useState } from 'react';
import { TaskList } from '../components/TaskList';
import { TaskForm } from '../components/TaskForm';
import type { Task, CreateTaskInput } from '../models/task.model';

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Sample Task',
    description: 'This is a sample task',
    completed: false,
    priority: 'high',
    createdAt: '2026-07-17T10:00:00.000Z',
    dueDate: '2026-07-20T10:00:00.000Z',
  },
  {
    id: 2,
    title: 'Another Sample Task',
    description: 'This is another sample task',
    completed: true,
    priority: 'medium',
    createdAt: '2026-07-16T10:00:00.000Z',
  },
];

export const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddTask = (taskInput: CreateTaskInput) => {
    const newTask: Task = {
      ...taskInput,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  return (
    <div>
      <h1>TO DO:</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};
