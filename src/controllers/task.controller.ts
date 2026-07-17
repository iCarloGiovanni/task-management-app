import type {Request, Response} from "express";
import {getAllTasks, getTaskById, addTask, updateTaskById, deleteTaskById, patchTaskById} from "../services/task.service.js";
import type {CreateTaskDto, PatchTaskDto, UpdateTaskDto} from "../models/task.model.js";

export const getTasks = (_request: Request, response: Response): void => {
  const tasks = getAllTasks();
  response.status(200).json({
    data: tasks,
  });
}

export const getTask = (request: Request, response: Response): void => {
  const id = Number(request.params.id);
  const task = getTaskById(id);
  if (!task) {
    response.status(404).json({
      error: "Task not found"
    });
    return;
  }
  response.status(200).json({
    data: task
  });
}

export const createTask = (request: Request, response: Response): void => {
  const taskData: CreateTaskDto = request.body;
  const newTask = addTask(taskData);
  response.status(201).json({
    data: newTask
  });
}

export const updateTask = (request: Request, response: Response): void => {
  const id = Number(request.params.id);
  const updatedTaskData: UpdateTaskDto = request.body;
  const updatedTask = updateTaskById(id, updatedTaskData);
  if (!updatedTask) {
    response.status(404).json({
      error: "Task not found"
    });
    return;
  }
  response.status(200).json({
    data: updatedTask
  });
}

export const deleteTask = (request: Request, response: Response): void => {
  const id = Number(request.params.id);
  const isDeleted = deleteTaskById(id);
  if (!isDeleted) {
    response.status(404).json({
      error: "Task not found"
    });
    return;
  }
  response.status(204).send();
}

export const patchTask = (request: Request, response: Response): void => {
  const id = Number(request.params.id);
  const patchedTaskData: PatchTaskDto = request.body;
  const patchedTask = patchTaskById(id, patchedTaskData);
  if (!patchedTask) {
    response.status(404).json({
      error: "Task not found"
    });
    return;
  }
  response.status(200).json({
    data: patchedTask
  });
}