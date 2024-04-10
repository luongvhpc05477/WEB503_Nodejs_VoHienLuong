exports.getAddProduct = (req, res, next) => {
  Product.fetchAll_product(function (list) {
    res.render("admin/product/addnew.ejs", {
      dataPro: list.products,
      dataCate: list.categories,
      //         // pageTitle: ' Danh sách sản phẩm ',
      //         // path: '/admin/product/list',
      //         // activeAddProduct: true,
      //         // data: Product.getAll()
    });
  });
 
}
  //     pageTitle: "Add Product",
  //     path: "/admin/add-product",
  //     activeAddProduct: true,
  //   });
const Product = require('../models/Product');
exports.postAddProduct = (req, res, next) => {
  const file = req.file;
  let nameProducts = req.body.name;
  let priceProducts = req.body.price;
  let content = req.body.description;
  let nameImage = file.filename;
  let categories_id = req.body.category;

  const products = {
    name: nameProducts,
    price: priceProducts,
    content: content,
    image: nameImage,
    categories_id: categories_id,
  };


  Product.saveProduct(products);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll_product(function (list) {
    res.render("./shop.ejs", {
      dataPro: list.products,
      dataCate: list.categories,
      //         // pageTitle: ' Danh sách sản phẩm ',
      //         // path: '/admin/product/list',
      //         // activeAddProduct: true,
      //         // data: Product.getAll()
    });
  });
};



exports.getIdProducts = (req, res, next) => {
  let cateid = req.params.cateid; // Corrected parameter name
  Product.fetchAll_getIdCategory(cateid, function (list) {
    res.render("./shop.ejs", {
      dataPro: list.products,
      dataCate: list.categories,
    });
  });
};
