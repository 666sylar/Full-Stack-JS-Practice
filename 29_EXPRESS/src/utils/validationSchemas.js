const yup = require('yup');
const { isAfter } = require('date-fns');

const validateDeadline = value => {
  if (!value) {
    return true;
  }

  const date = new Date(value);
  if (isNaN(date.getTime())) {
    return false;
  }

  return isAfter(date, new Date());
};

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  task: yup
    .string()
    .trim()
    .max(256)
    .required(),
  deadline: yup
    .string()
    .test('is-future', 'Deadline must be in the future', validateDeadline),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  task: yup
    .string()
    .trim()
    .max(256),
  deadline: yup
    .string()
    .test('is-future', 'Deadline must be in the future', validateDeadline),
  isDone: yup.boolean(),
});
