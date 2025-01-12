const mongoose = require('mongoose');
const env = process.env.NODE_ENV ?? 'development';
const { host, port, dbName } = require('../config/mongodbConfig.json')[env];

mongoose
  .connect(`mongodb://${host}:${port}/${dbName}`)
  .then(() => console.log('DB connection OK'))
  .catch(err => console.log(err));

module.exports.Product = require('./product');
module.exports.Customer = require('./customer');
module.exports.Order = require('./order');
module.exports.Review = require('./review');
