const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'images/' });
const ProductsController = require('../controller/ProductsController');
const router = express.Router();
// /admin/add-product => GET
router.get('/products', ProductsController.getAddProduct);
router.post('/addnew',upload.single('image'),ProductsController.postAddProduct);
module.exports = router;