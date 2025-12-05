const express = require('express');
const router = express.Router();

const upload = require('../config/multer');
const createProduct = require('../controllers/createProductController');
const updateProduct = require('../controllers/updateProductController');
const deleteProduct = require('../controllers/deleteProductController');
const { getProducts } = require('../controllers/productController');

router.get('/products', getProducts);
router.post('/products', upload.single('image'), createProduct);
router.put('/products/:id', upload.single('image'), updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
