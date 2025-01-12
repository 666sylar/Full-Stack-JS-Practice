const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const { Order } = require('../models');

module.exports.createOrder = async (req, res, next) => {
  const { body } = req;

  try {
    const createdOrder = await Order.create(body);

    if (!createdOrder) {
      return next(createHttpError(400, 'Unable to create order'));
    }

    res.status(201).send({ data: createdOrder });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.getOrders = async (req, res, next) => {
  const { limit = 10, skip = 0 } = req.query;

  try {
    const foundOrders = await Order.find()
      .sort({ _id: 1 })
      .limit(Number(limit))
      .skip(Number(skip))
      .populate('customer products.product');

    res.status(200).send({ data: foundOrders });
  } catch (err) {
    next(err);
  }
};

module.exports.getOrderById = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return next(createHttpError(400, 'Invalid order ID'));
    }

    const foundOrder = await Order.findById(orderId).populate(
      'customer products.product'
    );

    if (!foundOrder) {
      return next(createHttpError(404, 'Order not found'));
    }

    res.status(200).send({ data: foundOrder });
  } catch (err) {
    next(err);
  }
};

module.exports.updateOrderStatus = async (req, res, next) => {
  const {
    params: { orderId },
    body: { status },
  } = req;

  try {
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return next(createHttpError(400, 'Invalid order ID'));
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return next(createHttpError(404, 'Order not found'));
    }

    res.status(200).send({ data: updatedOrder });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteOrderById = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return next(createHttpError(400, 'Invalid order ID'));
    }

    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return next(createHttpError(404, 'Order not found'));
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
