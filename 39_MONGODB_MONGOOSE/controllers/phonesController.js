const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const { Phone, User } = require('../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    if (!createdPhone) {
      return next(createHttpError(400, 'Unable to create phone'));
    }

    res.status(201).send({ data: createdPhone });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.getPhones = async (req, res, next) => {
  const { limit = 10, skip = 0 } = req.query;

  try {
    const foundPhones = await Phone.find()
      .sort({ _id: 1 })
      .limit(Number(limit))
      .skip(Number(skip));

    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
      return next(createHttpError(400, 'Invalid phone ID'));
    }

    const foundPhone = await Phone.findById(phoneId);

    if (!foundPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(200).send({ data: foundPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
    body,
  } = req;

  try {
    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
      return next(createHttpError(400, 'Invalid phone ID'));
    }

    const updatedPhone = await Phone.findByIdAndUpdate(phoneId, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(200).send({ data: updatedPhone });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createHttpError(422, err.message));
    }
    next(err);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
      return next(createHttpError(400, 'Invalid phone ID'));
    }

    const deletedPhone = await Phone.findByIdAndDelete(phoneId);

    if (!deletedPhone) {
      return next(createHttpError(404, 'Phone not found'));
    }

    await User.updateMany({ phones: phoneId }, { $pull: { phones: phoneId } });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
