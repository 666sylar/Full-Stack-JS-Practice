const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const { Review, Product } = require('../models');

module.exports.createReview = async (req, res, next) => {
  const { body } = req;

  try {
    const createdReview = await Review.create(body);

    if (!createdReview) {
      return next(createHttpError(400, 'Unable to create review'));
    }

    await Product.findByIdAndUpdate(body.product, {
      $push: { reviews: createdReview._id },
    });

    res.status(201).send({ data: createdReview });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.getReviewsByProductId = async (req, res, next) => {
  const { productId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return next(createHttpError(400, 'Invalid product ID'));
    }

    const productWithReviews = await Product.findById(productId).populate(
      'reviews'
    );

    if (!productWithReviews) {
      return next(createHttpError(404, 'Product not found'));
    }

    res.status(200).send({ data: productWithReviews.reviews });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteReviewById = async (req, res, next) => {
  const { reviewId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      return next(createHttpError(400, 'Invalid review ID'));
    }

    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return next(createHttpError(404, 'Review not found'));
    }

    // Remove the review from the associated product
    await Product.findByIdAndUpdate(deletedReview.product, {
      $pull: { reviews: reviewId },
    });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
