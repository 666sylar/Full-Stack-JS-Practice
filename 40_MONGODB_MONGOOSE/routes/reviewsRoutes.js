const express = require('express');
const { reviewsController } = require('../controllers');

const reviewsRouter = express.Router();

reviewsRouter.route('/').post(reviewsController.createReview);

reviewsRouter.route('/:productId').get(reviewsController.getReviewsByProductId);

reviewsRouter.route('/:reviewId').delete(reviewsController.deleteReviewById);

module.exports = reviewsRouter;
