const express = require('express');
const router = express.Router();

const { getProducts } = require('../controllers/productController');
const deleteProduct = require('../controllers/deleteProductController');

router.get('/products', getProducts);
router.delete('/products/:id', deleteProduct);

module.exports = router;
