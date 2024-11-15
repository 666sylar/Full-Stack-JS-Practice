const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require('./controllers/tasksControllers');

const app = express();

app.use(express.json());

app.post('/tasks', createTask);
app.get('/tasks', getTasks);
app.get('/tasks/:taskId', getTaskById);
app.patch('/tasks/:taskId', updateTaskById);
app.delete('/tasks/:taskId', deleteTaskById);

module.exports = app;
