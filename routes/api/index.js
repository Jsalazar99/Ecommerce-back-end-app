const router = require('express').Router();
// const { ProductTags, Categories, Product, Tag } = require('../../models');
const tagRoutes = require('./tagRoutes');
// const ProductTagsRoutes = require('./ProductTags');
const productRoutes = require('./productRoutes');
const categoriesRoutes = require('./categoriesRoutes');

// routes used for each API
router.use('/categories', categoriesRoutes);
router.use('/products', productRoutes);
router.use('./productTags', ProductTags);
router.use('/tag', tagRoutes);


module.exports = router;

