const express = require('express');
const { ordersController } = require('../controllers');

const ordersRouter = express.Router();

ordersRouter
  .route('/')
  .post(ordersController.createOrder)
  .get(ordersController.getOrders);

ordersRouter
  .route('/:orderId')
  .get(ordersController.getOrderById)
  .patch(ordersController.updateOrderStatus)
  .delete(ordersController.deleteOrderById);

module.exports = ordersRouter;
