const mongoose = require('mongoose');
const env = process.env.NODE_ENV ?? 'development';
const { host, port, dbName } = require('../config/mongodbConfig.json')[env];

mongoose
  .connect(`mongodb://${host}:${port}/${dbName}`)
  .then(() => console.log('DB connection OK'))
  .catch(err => console.log('err :>> ', err));

module.exports.Phone = require('./phone');
module.exports.User = require('./user');
