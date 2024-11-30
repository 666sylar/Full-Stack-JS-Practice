const { Router } = require('express');
const { pagination } = require('../middleware');
const { phoneControllers } = require('../controllers');

// /api/phones
const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(pagination.paginatePhone, phoneControllers.getAllPhones);

// phonesRouter.post('/', (req, res) => {});
// phonesRouter.get('/', (req, res) => {});
// phonesRouter.get('/:id', (req, res) => {});
// phonesRouter.patch('/:id', (req, res) => {});
// phonesRouter.delete('/:id', (req, res) => {});

module.exports = phonesRouter;
