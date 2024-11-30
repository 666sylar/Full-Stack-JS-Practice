const { Customer } = require('./../models');
const { Phone } = require('../models');

module.exports.createCustomer = async (req, res, next) => {
  const { body } = req;

  try {
    const createdCustomer = await Customer.create(body);
    if (!createdCustomer) {
      return res.status(400).send('Something went wrong');
    }
    res.status(201).send(createdCustomer);
  } catch (err) {
    // res.status(500).send('Server Error');
    next(err);
  }
};

module.exports.getAllCustomers = async (req, res, next) => {
  const { pagination } = req;
  try {
    const foundCustomers = await Customer.getAll(pagination);
    res.status(200).send(foundCustomers);
  } catch (err) {
    // res.status(500).send('Server Error');
    next(err);
  }
};

module.exports.getByIdCustomer = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundCustomer = await Customer.getById(id);

    if (!foundCustomer) {
      // TODO createHttpError
      return res.status(404).send('Customer Not Found');
    }

    res.status(200).send(foundCustomer);
  } catch (err) {
    // res.status(500).send('Server Error');
    next(err);
  }
};

module.exports.updateByIdCustomer = async (req, res, next) => {
  const { id } = req.params;

  try {
    console.log('req.body:', req.body);
    const updatedCustomer = await Customer.updateById(id, req.body);

    if (!updatedCustomer) {
      // TODO createHttpError
      return res.status(404).send('Customer Not Found');
    }

    res.status(200).send(updatedCustomer);
  } catch (err) {
    console.error('Error updating customer:', err);
    next(err);
  }
};

module.exports.deleteByIdCustomer = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedCustomer = await Customer.deleteById(id);

    if (!deletedCustomer) {
      // TODO createHttpError
      return res.status(404).send('Customer Not Found');
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports.getAllPhonesByIdCustomer = async (req, res, next) => {
  const { id } = req.params;
  const { brand, startDate, endDate } = req.query;

  try {
    const conditions = [];
    if (brand) {
      conditions.push(`phones.brand = '${brand}'`);
    }
    if (startDate) {
      conditions.push(`orders.created_at >= '${startDate}'`);
    }
    if (endDate) {
      conditions.push(`orders.created_at <= '${endDate}'`);
    }

    const whereClause = conditions.length
      ? `WHERE customers.id = ${id} AND ${conditions.join(' AND ')}`
      : `WHERE customers.id = ${id}`;

    const foundPhones = await Phone.getAllById(whereClause);

    res.status(200).send(foundPhones);
  } catch (err) {
    // res.status(500).send('Server Error');
    next(err);
  }
};

// {createCustomer, ..., deleteByIdCustomer}
