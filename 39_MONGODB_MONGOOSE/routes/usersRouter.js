const { Router } = require('express');
const { usersController } = require('../controllers');

const usersRouter = Router();

usersRouter.route('/').post(usersController.createUser);

usersRouter
  .route('/:userId/phones')
  .post(usersController.createUserPhone)
  .get(usersController.getUserPhones);

module.exports = usersRouter;
