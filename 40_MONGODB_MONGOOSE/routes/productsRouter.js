const { Router } = require('express');
const { productsController } = require('../controllers');

const productsRouter = Router();

productsRouter
  .route('/')
  .post(productsController.createProduct)
  .get(productsController.getProducts);

productsRouter
  .route('/:productId')
  .get(productsController.getProductById)
  .patch(productsController.updateProductById)
  .delete(productsController.deleteProductById);

module.exports = productsRouter;
