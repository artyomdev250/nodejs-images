const express = require('express');
const router = express.Router();

const upload = require('../config/multer');
const createProduct = require('../controllers/createProductController');
const { getProducts } = require('../controllers/productController');
const deleteProduct = require('../controllers/deleteProductController');

router.get('/products', getProducts);
router.post('/products', upload.single('image'), createProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
