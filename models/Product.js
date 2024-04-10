const db = require("./Database");
const products = [];
module.exports = class Product {
  constructor() {}

  static saveProduct(products) {
    db.query('insert into products SET ?',products, function(err, data) {
    if (err) throw err;
    return true;
    });
  }

    


  static fetchAll_product(callback) {
    let sql_products = `SELECT * FROM products`;
    let sql_categories = `SELECT * FROM categories`;
    db.query(sql_products, function (err, dataPro) {
      if (err) throw err;
      db.query(sql_categories, function (err, dataCate) {
        if (err) throw err;
        callback({products: dataPro, categories:dataCate});
      });
    });
  }
  

  static fetchAll_getIdCategory(cateid, callback) {
    let sql_products = `SELECT * FROM products WHERE categories_id='${cateid}';`;
    let sql_categories = `SELECT * FROM categories;`;
  
    db.query(sql_products, function (err, dataPro) {
      if (err) throw err;
  
      db.query(sql_categories, function (err, dataCate) {
        if (err) throw err;
  
        callback({ products: dataPro, categories: dataCate });
      });
    });
  }
  
}


