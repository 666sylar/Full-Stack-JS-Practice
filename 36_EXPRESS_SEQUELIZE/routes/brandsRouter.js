const { Router } = require('express');
const { brandsController } = require('../controllers');

const brandsRouter = Router();

brandsRouter.route('/').get(brandsController.getBrands);

brandsRouter
  .route('/:id/phones')
  .post(brandsController.createPhoneForBrand)
  .get(brandsController.getBrandPhones);

module.exports = brandsRouter;
