const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const { User, Phone } = require('../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);

    if (!createdUser) {
      return next(createHttpError(400, 'Unable to create User'));
    }

    res.status(201).send({ data: createdUser });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.createUserPhone = async (req, res, next) => {
  const {
    params: { userId },
    body,
  } = req;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return next(createHttpError(400, 'Invalid user ID'));
    }

    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return next(createHttpError(404, 'User not found'));
    }

    const createdPhone = await Phone.create({ ...body, userId });

    if (!createdPhone) {
      return next(createHttpError(400, 'Unable to create phone'));
    }

    foundUser.phones.push(createdPhone._id);
    await foundUser.save();

    res.status(201).send({ data: createdPhone });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.getUserPhones = async (req, res, next) => {
  const { userId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return next(createHttpError(400, 'Invalid user ID'));
    }

    const userWithPhones = await User.findById(userId).populate('phones');

    if (!userWithPhones) {
      return next(createHttpError(404, 'User not found'));
    }

    res.status(200).send({ data: userWithPhones.phones });
  } catch (err) {
    next(err);
  }
};
