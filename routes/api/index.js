const router = require('express').Router();
const tagRoutes = require('./tagRoutes');

const productRoutes = require('./productRoutes');
const categoriesRoutes = require('./categoriesRoutes');

// routes used for each API
router.use('/categories', categoriesRoutes);
router.use('/products', productRoutes);
router.use('/tag', tagRoutes);

module.exports = router;

