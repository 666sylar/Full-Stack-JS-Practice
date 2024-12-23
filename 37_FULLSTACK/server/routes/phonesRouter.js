const { Router } = require('express');
const { phonesController } = require('../controllers');
const { paginate, upload } = require('../middleware');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(upload.uploadPhoneImage, phonesController.createPhone)
  .get(paginate.paginatePhones, phonesController.getPhones);

phonesRouter
  .route('/:id')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhone)
  .put(phonesController.updateOrCreatePhone, phonesController.createPhone)
  .delete(phonesController.deletePhone);

phonesRouter
  .route('/:id/image')
  .patch(upload.uploadPhoneImage, phonesController.updatePhoneImage);

module.exports = phonesRouter;
