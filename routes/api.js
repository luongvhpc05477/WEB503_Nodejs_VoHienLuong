const express = require('express');
const apiProductcontroller = require('../controller/api/apiProductcontroller');
const UserController  = require('../controller/api/UserController')
const multer = require('multer');
const upload = multer({ dest: 'images/' });
const router = express.Router();



// lấy tất cả sản phẩm
router.get('/products', apiProductcontroller.getProducts);
// lấy 1
router.get('/products/:id', apiProductcontroller.getProductsById);
// thêm sản phẩm nè
router.post('/products',upload.single('image'), apiProductcontroller.postProducts);

// xóa dữ liệu 
router.delete('/products/:id', apiProductcontroller.delProduct);

// sửa dữ liệu 
router.put('/products/:id',upload.single('image'),apiProductcontroller.postEditProducts);



// lấy tất cả user
router.get('/users', UserController.getUsers);
// lấy 1 user
router.get('/users/:id', UserController.getUsersById);
// thêm user
router.post('/users', UserController.postUser);

// xóa user 
router.delete('/users/:id', UserController.delUsers);

// sửa user 
router.put('/users/:id',UserController.postEditUsers);



module.exports = router;