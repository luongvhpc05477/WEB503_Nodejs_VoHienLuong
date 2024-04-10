const express = require('express');
const ProductsController = require('../controller/ProductsController');
const router = express.Router();

router.get('/',ProductsController.getProducts);
router.get('/shop/:cateid',ProductsController.getIdProducts);


module.exports = router;