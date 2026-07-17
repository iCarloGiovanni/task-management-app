import { Router } from "express";
import { getTasks, getTask, createTask, updateTask, deleteTask, patchTask} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.get("/", getTasks);
taskRouter.get("/:id", getTask);
taskRouter.post("/", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.patch("/:id", patchTask);

export default taskRouter;