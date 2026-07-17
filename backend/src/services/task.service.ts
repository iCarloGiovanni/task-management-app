import type { Task, CreateTaskDto, UpdateTaskDto, PatchTaskDto} from "../models/task.model.js";

const tasks: Task[] = [
    {
        id: 1,
        title: "Buy groceries",
        description: "get groceries for the week",
        completed: false,
        priority: "medium",
        createdAt: new Date(),
    },
    {
        id: 2,
        title: "Pay bills",
        description: "Clear credit card bills",
        completed: false,
        priority: "high",
        createdAt: new Date(),
    }
];

export const getAllTasks = (): Task[] => {
  return [...tasks];
};

export const getTaskById = (id: number): Task | undefined => {
    return tasks.find(task => task.id === id);
}

export const addTask = (taskData: CreateTaskDto): Task => {
    const highestId = Math.max(0, ...tasks.map(task => task.id));
    const newId = highestId + 1;
    const newTask: Task = {
        ...taskData,
        id: newId,
        createdAt: new Date(),
        completed: false
    };

    tasks.push(newTask);

    return newTask;
}

export const updateTaskById = (id: number, updatedTask: UpdateTaskDto): Task | undefined => {
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return undefined;
    }

    const currentTask = tasks[taskIndex];

    const updatedTaskObj: Task = {
    ...updatedTask,
    id: currentTask.id,
    createdAt: currentTask.createdAt
    };

    tasks[taskIndex] = updatedTaskObj;
    
    return updatedTaskObj;
}

export const deleteTaskById = (id: number): boolean => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return false;
    }
    tasks.splice(taskIndex, 1);
    return true;
}

export const patchTaskById = (id: number, patchedTask: PatchTaskDto): Task | undefined => {
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return undefined;
    }

    const currentTask = tasks[taskIndex];

    const updatedTaskObj: Task = {
        ...currentTask,
        ...patchedTask,
        id: currentTask.id,
        createdAt: currentTask.createdAt
    };

    tasks[taskIndex] = updatedTaskObj;

    return updatedTaskObj;
}