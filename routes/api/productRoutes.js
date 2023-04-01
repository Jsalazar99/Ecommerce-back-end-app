const router = require('express').Router();
const { Product } = require('../../models');

// GET  
router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll();
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single PRODUCT
router.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
        });

        if (!productData) {
            res.status(404).json({ message: 'No products found with this id!' });
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE 
router.post('/', async (req, res) => {
    try {
        const productData = await Product.create(req.body);
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT 
router.put('/:id', async (req, res) => {
    try {
        const productData = await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE 
router.delete('/:id', async (req, res) => {
    try {
        const productData = await Product.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!productData) {
            res.status(404).json({ message: 'No location found with this id!' });
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
