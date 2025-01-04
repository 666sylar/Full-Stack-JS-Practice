const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      minlength: [2, 'Brand must be at least 2 characters long'],
      maxlength: [64, 'Brand must be at most 64 characters long'],
    },
    model: {
      type: String,
      required: [true, 'Model is required'],
      match: [
        /^[A-Za-z0-9\- ]+$/,
        'Model can only contain letters, numbers, spaces, and hyphens',
      ],
    },
    year: {
      type: Number,
      required: [true, 'Year is required'],
      min: [2000, 'Year must be 2000 or later'],
      max: [
        new Date().getFullYear(),
        `Year must not be later than ${new Date().getFullYear()}`,
      ],
    },
    screenSize: {
      type: Number,
      required: [true, 'Screen size is required'],
      min: [2.0, 'Screen size must be at least 3 inches'],
      max: [16.0, 'Screen size must be at most 10 inches'],
    },
    processor: {
      type: String,
      required: [true, 'Processor is required'],
      min: [2, 'Processor must be at least 2 characters long'],
      max: [32, 'Processor must be at most 64 characters long'],
    },
    ram: {
      type: Number,
      required: [true, 'RAM is required'],
      min: [1, 'RAM must be at least 1 GB'],
      max: [64, 'RAM must be at most 64 GB'],
    },
    hasNFC: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
