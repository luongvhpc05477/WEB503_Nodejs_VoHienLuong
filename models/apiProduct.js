// var db = require("./Database");
// var products = [];
// module.exports = class Product {
//   constructor() {}
  

//   static postProduct(product, callback) {
//     db.query('INSERT INTO products SET ?', product, function (err, data) {
//         if (err) {
//             throw err
//         } else {
//             callback(data);
//         }
//     });
// }


//   static fetchAll(callback) {
//     let sql = `SELECT * FROM products`;
//     db.query(sql, function (err, data) {
//       if (err) throw err;
//       callback(data) ;
//     });
//   }
//   // lấy 1

//   static fetchOne(id,callback) {
//     let sql = `SELECT * FROM products where id=${id}`;
//     db.query(sql, function (err, data) {
//       if (err) throw err;
//       callback(data) ;
//     });
//   }


  
// static deleteProduct(id, callback) {
//     let sql_products = `DELETE FROM products WHERE id = '${id}'`;
//     db.query(sql_products,function(err,dataPro) {
//         if (err) {
//           throw err;
//         }else{
//           callback(dataPro);
//         }  
//     });
// }

// // static editProduct(id,callback) {
// //   db.query(`select * from products where id= '${id}'`, function(err, dataPro) {
// //   if (err) throw err;
// //   callback(dataPro);
// //   })
// // }

// // image,image='${image}',

// static PostEditProduct(id,pro,callback) {
//   let sql_products = `UPDATE products SET name=?, price=?, sale_price=?, content=?, short_description=?,image=?, categories_id=? WHERE id='${id}'`;
//   db.query(sql_products,pro,function (err, data) {
//     if (err) throw err;
//     callback(data);
//   });
// }

// };

const sequelize = require('./Database');

const { Sequelize , DataTypes } = require('sequelize');

const Product = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  sale_price: Sequelize.INTEGER,
  content: Sequelize.TEXT,
  short_description: Sequelize.TEXT,
  image: Sequelize.STRING ,
  categories_id: Sequelize.INTEGER,
}, {
  timestamps: false
});



module.exports = Product;

