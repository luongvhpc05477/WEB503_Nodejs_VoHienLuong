const express = require('express');
const apiHopdongController = require('../controller/api/apiHopdongController');
// const UserController  = require('../controller/api/UserController')
const multer = require('multer');
const upload = multer({ dest: 'images/' });
const router = express.Router();



// lấy tất cả sản phẩm
router.get('/hopdong', apiHopdongController.getHopdong);
// lấy 1
router.get('/hopdong/:id', apiHopdongController.gethopdongById);

// // thêm sản phẩm nè
router.post('/hopdong' ,apiHopdongController.checkForm,apiHopdongController.postHopdong);

// // xóa dữ liệu 
router.delete('/hopdong/:id', apiHopdongController.delhopdong);

// // sửa dữ liệu 
router.put('/hopdong/:id',apiHopdongController.postEdithopdong);







module.exports = router;