const { Router } = require('express');
const productsRouter = require('./productsRouter');
const customersRouter = require('./customersRouter');
const ordersRoutes = require('./ordersRoutes');
const reviewsRoutes = require('./reviewsRoutes');

const router = Router();

router.use('/products', productsRouter);
router.use('/customers', customersRouter);
router.use('/orders', ordersRoutes);
router.use('/reviews', reviewsRoutes);

module.exports = router;
