const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const { Customer, Product, Order } = require('../models');

module.exports.createCustomer = async (req, res, next) => {
  const { body } = req;

  try {
    const createdCustomer = await Customer.create(body);

    if (!createdCustomer) {
      return next(createHttpError(400, 'Unable to create customer'));
    }

    res.status(201).send({ data: createdCustomer });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.addProductToWishlist = async (req, res, next) => {
  const {
    params: { customerId },
    body: { productId },
  } = req;

  try {
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return next(createHttpError(400, 'Invalid customer ID'));
    }
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return next(createHttpError(400, 'Invalid product ID'));
    }

    const customer = await Customer.findById(customerId);
    if (!customer) {
      return next(createHttpError(404, 'Customer not found'));
    }

    const product = await Product.findById(productId);
    if (!product) {
      return next(createHttpError(404, 'Product not found'));
    }

    if (customer.wishlist.includes(productId)) {
      return next(createHttpError(400, 'Product is already in the wishlist'));
    }

    customer.wishlist.push(productId);
    await customer.save();

    res.status(200).send({
      message: 'Product successfully added to wishlist',
      data: customer.wishlist,
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getCustomerById = async (req, res, next) => {
  const { customerId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return next(createHttpError(400, 'Invalid customer ID'));
    }

    const foundCustomer = await Customer.findById(customerId).populate(
      'orders'
    );

    if (!foundCustomer) {
      return next(createHttpError(404, 'Customer not found'));
    }

    res.status(200).send({ data: foundCustomer });
  } catch (err) {
    next(err);
  }
};

module.exports.updateCustomerById = async (req, res, next) => {
  const {
    params: { customerId },
    body,
  } = req;

  try {
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return next(createHttpError(400, 'Invalid customer ID'));
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(customerId, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCustomer) {
      return next(createHttpError(404, 'Customer not found'));
    }

    res.status(200).send({ data: updatedCustomer });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.deleteCustomerById = async (req, res, next) => {
  const { customerId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return next(createHttpError(400, 'Invalid customer ID'));
    }

    const deletedCustomer = await Customer.findByIdAndDelete(customerId);

    if (!deletedCustomer) {
      return next(createHttpError(404, 'Customer not found'));
    }

    await Order.deleteMany({ customer: customerId });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
