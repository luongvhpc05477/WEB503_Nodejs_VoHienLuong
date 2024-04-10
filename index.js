const express = require("express");
let bodyParser = require("body-parser");
const app = express();
const port = 7800;
var jsonParser = bodyParser.json();
app.use(express.static("public"));

app.use(bodyParser.urlencoded());
const multer = require("multer");
const upload = multer({ dest: "images/" });
app.use("/images", express.static(__dirname + "/images"));

app.set("view engine ", "ejs");
app.set("views ", "./views");



// const mysql = require('mysql');
// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'mysql',
//   database : 'nodejs'
// });


//-------------------------------------------------//
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const apiRoutes = require('./routes/api');
app.use('/api',apiRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);


//-------------------------------------------------//



// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const errorController = require('./controllers/Error');
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);




// app.post("/addnew", upload.single("image"), (req, res) => {
//   const file = req.file;
//   let nameProducts = req.body.name;
//   let priceProducts = req.body.price;
//   let content = req.body.description;
//   let nameImage = file.filename;
//   let categories_id = req.body.categories_id;

//   products = {
//     id: res.insertId,
//     name: nameProducts,
//     image: nameImage,
//     content: content,
//     price: priceProducts,
//     categories_id: categories_id
//   }
//   db.query('insert into products SET ?',products, function (err, data) {
//     if (err) throw err;
//     res.redirect('/');
//   });
// });


// app.get("/addnew", (req, res) => {
//   let sql_categories = `SELECT * FROM categories`;
//   db.query(sql_categories, function (err, cate) {
//     if (err) throw err;
//     res.render('addnew.ejs', {categories: cate});
//   });
// });


// app.get("/",(req,res)=>{
//   let sql_products = `SELECT * FROM products`;
//   let sql_categories=`SELECT * FROM  categories`;

//   db.query(sql_products, function(err, pro) {
//   if (err) throw err;
  
//   db.query(sql_categories, function(err, cate) {
//     if (err) throw err;

//     res.render('shop.ejs',{categories:cate,products:pro});
//     });
//   });
// });




//   app.get("/:cateID", (req, res) => {
//     // if(!id){
//     //  window.location.href ('')
//     // }
//     let cateid = req.params.cateID;
//     let sql_products = `SELECT * FROM products WHERE categories_id='${cateid}';`;
//     let sql_categories = `SELECT * FROM categories;`;
//     db.query(sql_products, function (err, pro) {
//       if (err) throw err;
//       db.query(sql_categories, function (err, cate) {
//         if (err) throw err;
//         res.render("shop.ejs", {categories:cate,products:pro});
//       });
//     });
//   });



app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
});


// dùng query cho chức năng tìm kiếm  