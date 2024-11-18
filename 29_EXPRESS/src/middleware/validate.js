const {
  CREATE_TASK_VALIDATION_SCHEMA,
  UPDATE_TASK_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateTaskOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await CREATE_TASK_VALIDATION_SCHEMA.validate(body);
    next();
  } catch (e) {
    next(e);
  }
};

module.exports.validateTaskOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await UPDATE_TASK_VALIDATION_SCHEMA.validate(body);
    next();
  } catch (e) {
    next(e);
  }
};
