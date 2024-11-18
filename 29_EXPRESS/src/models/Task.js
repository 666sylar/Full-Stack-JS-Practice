const { v4: uuidv4 } = require('uuid');
const { formatISO } = require('date-fns');

const tasks = [];

const TaskDB = {
  tasks,

  createTask (newTask) {
    const task = {
      id: uuidv4(),
      ...newTask,
      deadline: newTask.deadline ? formatISO(new Date(newTask.deadline)) : null,
      isDone: false,
    };
    this.tasks.push(task);
    return task;
  },

  getTasks () {
    return [...this.tasks];
  },

  getTaskById (id) {
    return this.tasks.find(task => task.id === id) || null;
  },

  updateTask (id, values) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      const updatedValues = {
        ...values,
        deadline: values.deadline
          ? formatISO(new Date(values.deadline))
          : this.tasks[index].deadline,
      };
      this.tasks[index] = { ...this.tasks[index], ...updatedValues };
      return this.tasks[index];
    }
    return null;
  },

  deleteTask (id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      return this.tasks.splice(index, 1);
    }
    return null;
  },
};

module.exports = TaskDB;
