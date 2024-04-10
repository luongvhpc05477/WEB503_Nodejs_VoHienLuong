const { name } = require("ejs");
const Product = require("../../models/apiProduct");

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll(function (data) {
//     res.status(200).json({
//       products: data,
//     });
//   });
// };

exports.getProducts =  async (req, res, next) => {
  const products = await Product.findAll();
  res.status(200).json({
    data: products
  })
  // res.send(products);

  // Product.fetchAll(function (data) {
  //   res.status(200).json({
  //     products: data,
  //   });
  // });
};

exports.getProductsById = async (req,res,next) => {
  const id = parseInt(req.params.id);

  // console.log(id);
  if(isNaN(id)){
    return res.status(404).json({
      "message":"Invalid product ID",
      "data": []
    })
  }
  const products = await Product.findByPk(id,
    {attributes:['name','price','sale_price','content','image','short_description']
  })
  res.status(200).json({
      messages: "Product by id",
      dataProduct: products
  })
}






// exports.getProductsById = (req, res, next) => {
//   let id = req.params.id;
//   if(isNaN(id)){
//     return res.status(404).json({
//       "message": "Invalid id",
//       "data": []
//     })
//   }
  
//   Product.fetchOne(id,function (data) {
//     res.status(200).json({
//       products: data,
//     });
//   });
// };



exports.postProducts =  async (req, res, next) => {
  let file = req.file;
  let = { name,short_description,price,sale_price,content,categories_id } = req.body
  let image = file.filename;
  const product = {
    name: name,
    price: price,
    sale_price: sale_price,
    content: content,
    short_description: short_description,
    image: image,
    categories_id: categories_id,
  };

  

  const products = await Product.create(product)
    res.status(201).json({
      messages: "Thêm products thành công !",
      dataPro: products,
    });
  };










 // xóa dữ liệu
exports.delProduct =  async (req, res, next) => {
    const proId = req.params.id;

    const product = await Product.destroy({
      where: {
        id: proId,
      }
    });
    
      res.status(200).json({
        messages: "Sản phẩm đã được xóa thành công!",
        delPro: product,
      });
    }
  




  
// // sửa dữ liệu




exports.postEditProducts = async (req, res, next) => {
  const Id = parseInt(req.params.id); 
  if(isNaN(Id)){
    return res.status(404).json({
      "message": "Invalid id",
      "data": []
  })
  }
  const file = req.file
  const values = {
    name : req.body.name,
    price : req.body.price,
    sale_price : req.body.sale_price ,
    content : req.body.content,
    short_description : req.body.short_description,
    image : file.filename,
    categories_id : req.body.categories_id
  }

  const product = await Product.update(values, {
    where: {
        id: Id,
    }
  })
    res.status(201).json({
      messages: "Cập nhật products thành công !",
      dataPro: product,
    });
}




