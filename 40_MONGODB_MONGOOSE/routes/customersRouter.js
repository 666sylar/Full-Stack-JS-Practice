const { Router } = require('express');
const { customersController } = require('../controllers');

const customersRouter = Router();

customersRouter.route('/').post(customersController.createCustomer);

customersRouter
  .route('/:customerId')
  .get(customersController.getCustomerById)
  .patch(customersController.updateCustomerById)
  .delete(customersController.deleteCustomerById);

customersRouter
  .route('/:customerId/wishlist')
  .post(customersController.addProductToWishlist);

module.exports = customersRouter;
