const { name } = require("ejs");
const Hopdong = require("../../models/apiProduct");
const validator = require('validator')
const lad = require('lodash');


exports.checkForm = (req, res, next) => {
  let err={}

  const ten_nguoi_mua = lad.get(req.body, "ten_nguoi_mua", "")
  const ten_nguoi_ban = lad.get(req.body, "ten_nguoi_ban", "")
  const gia_tien = lad.get(req.body, "gia_tien", "")
  const ngay_ky = lad.get(req.body, "ngay_ky", "")
  const trang_thai = lad.get(req.body, "trang_thai", "")

  if(validator.isEmpty(ten_nguoi_mua)){
      err.ten_nguoi_mua = "Nhập tên người mua"
  }
  if(validator.isEmpty(ten_nguoi_ban)){
      err.ten_nguoi_ban = "Nhập tên người bán"
  }
  if(validator.isEmpty(gia_tien)){
      err.gia_tien = "Nhập giá tiền"
  }
  if(validator.isEmpty(ngay_ky)){
      err.ngay_ky = "Nhập ngày ký"
  }
  if(validator.isEmpty(trang_thai)){
      err.trang_thai = "Nhập trạng thái"
  }
  if (lad.isEmpty(err)) {
      return next()
  }
  return res.status(400).json(err)
}








// lấy danh sách
exports.getHopdong =  async (req, res, next) => {
  const donhang = await Hopdong.findAll();
  res.status(200).json({
    data: donhang
  })

};

exports.gethopdongById = async (req,res,next) => {
  const id = parseInt(req.params.id);
  if(isNaN(id)){
    return res.status(404).json({
      "message":"Invalid product ID",
      "data": []
    })
  }
  const hopdong = await Hopdong.findByPk(id,
    {attributes:['ten_nguoi_mua','ten_nguoi_ban','ngay_ky','gia_tien','trang_thai',]
  })
  res.status(200).json({
      messages: "Hợp đồng by id",
      data: hopdong
  })
}






// thêm dữ liệu
exports.postHopdong =  async (req, res, next) => {
 
  let = { ten_nguoi_mua, ten_nguoi_ban, gia_tien,ngay_ky, trang_thai} = req.body
  const hopdong = {
    ten_nguoi_mua: ten_nguoi_mua,
    ten_nguoi_ban: ten_nguoi_ban,
    gia_tien: gia_tien,
    ngay_ky: ngay_ky,
    trang_thai: trang_thai,
   
  };

  

  const Hopdongs = await Hopdong.create(hopdong)
    res.status(201).json({
      messages: "Thêm hợp đồng thành công  !",
      data: Hopdongs,
    });
  };










 // xóa dữ liệu
exports.delhopdong =  async (req, res, next) => {
    const Id = req.params.id;

    const hopdong = await Hopdong.destroy({
      where: {
        id: Id,
      }
    });
    
      res.status(200).json({
        messages: "Hợp đồng đã được xóa thành công!",
        delhopdong: hopdong,
      });
    }
  




  
 // sửa dữ liệu

exports.postEdithopdong = async (req, res, next) => {
  const Id = parseInt(req.params.id); 
  if(isNaN(Id)){
    return res.status(404).json({
      "message": "Invalid id",
      "data": []
  })
  }
  const values = {
    ten_nguoi_mua : req.body.ten_nguoi_mua,
    ten_nguoi_ban : req.body.ten_nguoi_ban,
    gia_tien : req.body.gia_tien ,
    trang_thai : req.body.trang_thai,
   
  }

  const hopdong = await Hopdong.update(values, {
    where: {
        id: Id,
    }
  })
    res.status(201).json({
      messages: "Cập nhật hợp đồng thành công !",
      data: hopdong,
    });
}




