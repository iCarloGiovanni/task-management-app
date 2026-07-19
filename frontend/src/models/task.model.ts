export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  createdAt: string;
  dueDate?: string;
}

export interface CreateTaskInput {
  title: string;
  description: string;
  priority: Priority;
  dueDate?: string;
}
