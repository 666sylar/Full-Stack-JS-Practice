const express = require('express');
const http = require('http');
const { tasksController } = require('./controllers');
const { validate, errorHandlers } = require('./middleware');

const PORT = process.env.PORT || 5555;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('To Do');
});

app.post('/tasks', validate.validateTaskOnCreate, tasksController.createTask);
app.get('/tasks', tasksController.getTasks);
app.get('/tasks/:id', tasksController.getTaskById);
app.patch(
  '/tasks/:id',
  validate.validateTaskOnUpdate,
  tasksController.updateTaskById
);
app.delete('/tasks/:id', tasksController.deleteTaskById);

app.use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
