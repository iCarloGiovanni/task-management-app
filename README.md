# Task Management App

A full-stack task management application built with TypeScript.

The project currently includes a REST API developed with Node.js and Express, along with an interactive React frontend. The frontend currently manages tasks locally; API integration is the next development phase.

## Tech Stack

### Backend

- Node.js
- Express
- TypeScript
- TSX

### Frontend

- React
- TypeScript
- Vite
- ESLint

## Current Features

### Backend

- Retrieve all tasks
- Retrieve a task by ID
- Create tasks
- Fully update tasks
- Partially update tasks
- Delete tasks
- HTTP status handling
- Layered structure with routes, controllers, services and models

### Frontend

- Typed task models
- Reusable React components
- Task list and individual task rendering
- Empty-state rendering
- Controlled task creation form
- Title validation
- Priority selection
- Optional due dates
- Local task state with `useState`
- Immutable state updates
- Calendar-date formatting without timezone shifts

## Project Structure

```text
task-management-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   └── TaskList.tsx
│   │   ├── models/
│   │   │   └── task.model.ts
│   │   ├── pages/
│   │   │   └── TaskPage.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── .gitignore
└── README.md
```

## Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend runs at:

```text
http://localhost:3000
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite will display the local frontend URL in the terminal.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/tasks` | Retrieve all tasks |
| `GET` | `/tasks/:id` | Retrieve a task by ID |
| `POST` | `/tasks` | Create a task |
| `PUT` | `/tasks/:id` | Fully update a task |
| `PATCH` | `/tasks/:id` | Partially update a task |
| `DELETE` | `/tasks/:id` | Delete a task |

## Important Notes

The backend currently stores tasks in memory. All created or updated data is reset when the backend server restarts.

The frontend currently uses local state and has not yet been connected to the REST API.

## Roadmap

- [x] Create the Node.js and Express backend
- [x] Implement task CRUD endpoints
- [x] Add TypeScript models and DTOs
- [x] Restructure the repository into `backend` and `frontend`
- [x] Initialize React with Vite and TypeScript
- [x] Build the frontend component structure
- [x] Add controlled task creation form
- [x] Manage tasks with local React state
- [ ] Connect the frontend to `GET /tasks`
- [ ] Connect task creation to `POST /tasks`
- [ ] Connect task updates to `PATCH /tasks/:id`
- [ ] Connect task deletion to `DELETE /tasks/:id`
- [ ] Add request loading and error states
- [ ] Add runtime validation
- [ ] Add database persistence
- [ ] Add automated tests
- [ ] Add authentication
- [ ] Deploy the application