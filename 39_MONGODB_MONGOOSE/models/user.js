const mongoose = require('mongoose');
const yup = require('yup');

const EMAIL_VALIDATION_SCHEMA = yup.string().email();

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      minlength: [2, 'First name must be at least 2 characters long'],
      maxlength: [64, 'First name must be at most 64 characters long'],
      match: [
        /^[A-Z][a-z]+$/,
        'First name must start with an uppercase letter and contain only letters',
      ],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      minlength: [2, 'Last name must be at least 2 characters long'],
      maxlength: [64, 'Last name must be at most 64 characters long'],
      match: [
        /^[A-Z][a-z]+$/,
        'Last name must start with an uppercase letter and contain only letters',
      ],
    },
    email: {
      type: String,
      validate: {
        validator: v => EMAIL_VALIDATION_SCHEMA.isValidSync(v),
        message: 'Invalid email format',
      },
      required: [true, 'Email is required'],
    },
    phones: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Phone',
      },
    ],
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
