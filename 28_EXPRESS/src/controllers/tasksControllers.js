const { v4: uuidv4 } = require('uuid');

const tasks = [
  {
    id: '1',
    task: 'test',
    deadline: '11-11-2024',
    isDone: false,
  },
];

module.exports.createTask = (req, res) => {
  const { body } = req;

  const createdTask = { id: uuidv4(), ...body, isDone: false };
  tasks.push(createdTask);

  res.status(201).send(createdTask);
};

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks);
};

module.exports.getTaskById = (req, res) => {
  const { taskId } = req.params;

  const foundTask = tasks.find(t => t.id === taskId);

  if (!foundTask) {
    return res.status(404).send('Task Not Found');
  }

  res.status(200).send(foundTask);
};

module.exports.updateTaskById = (req, res) => {
  const {
    params: { taskId },
    body,
  } = req;

  const foundTaskIndex = tasks.findIndex(t => t.id === taskId);

  if (foundTaskIndex === -1) {
    return res.status(404).send('Task Not Found');
  }

  tasks[foundTaskIndex] = { ...tasks[foundTaskIndex], ...body };
  res.status(200).send(tasks[foundTaskIndex]);
};

module.exports.deleteTaskById = (req, res) => {
  const { taskId } = req.params;

  const foundTaskIndex = tasks.findIndex(t => t.id === taskId);

  if (foundTaskIndex === -1) {
    return res.status(404).send('Task Not Found');
  }

  tasks.splice(foundTaskIndex, 1);
  res.status(204).end();
};
