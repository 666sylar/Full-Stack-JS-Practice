const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const { Product, Review } = require('../models');

module.exports.createProduct = async (req, res, next) => {
  const { body } = req;

  try {
    const createdProduct = await Product.create(body);

    if (!createdProduct) {
      return next(createHttpError(400, 'Unable to create product'));
    }

    res.status(201).send({ data: createdProduct });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.getProducts = async (req, res, next) => {
  const { limit = 10, skip = 0 } = req.query;

  try {
    const foundProducts = await Product.find()
      .sort({ _id: 1 })
      .limit(Number(limit))
      .skip(Number(skip));

    res.status(200).send({ data: foundProducts });
  } catch (err) {
    next(err);
  }
};

module.exports.getProductById = async (req, res, next) => {
  const { productId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return next(createHttpError(400, 'Invalid product ID'));
    }

    const foundProduct = await Product.findById(productId).populate('reviews');

    if (!foundProduct) {
      return next(createHttpError(404, 'Product not found'));
    }

    res.status(200).send({ data: foundProduct });
  } catch (err) {
    next(err);
  }
};

module.exports.updateProductById = async (req, res, next) => {
  const {
    params: { productId },
    body,
  } = req;

  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return next(createHttpError(400, 'Invalid product ID'));
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return next(createHttpError(404, 'Product not found'));
    }

    res.status(200).send({ data: updatedProduct });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.deleteProductById = async (req, res, next) => {
  const { productId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return next(createHttpError(400, 'Invalid product ID'));
    }

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return next(createHttpError(404, 'Product not found'));
    }

    await Review.deleteMany({ product: productId });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
