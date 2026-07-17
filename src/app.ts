import express from "express";
import taskRouter from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    message: "Welcome to the Task Management API",
  });
});

app.get("/health", (_request, response) => {
  response.status(200).json({
    status: "ok",
    message: "Task Management API is running",
  });
});

app.use("/tasks", taskRouter);

export default app;