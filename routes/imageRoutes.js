const express = require('express');
const { getImages } = require('../controllers/imageController');

const router = express.Router();

router.get('/database', getImages);

module.exports = router;