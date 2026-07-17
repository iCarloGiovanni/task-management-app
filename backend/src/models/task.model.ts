export type Priority = "low" | "medium" | "high";

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: Priority;
    createdAt: Date;
    dueDate?: Date;
}

export interface CreateTaskDto {
    title: string;
    description: string;
    priority: Priority;
    dueDate?: Date;
}

export interface UpdateTaskDto {
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  dueDate?: Date;
}

export type PatchTaskDto = Partial<UpdateTaskDto>;