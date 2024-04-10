const db = require("./Database");
const categories = [];
module.exports = class Cateroy {
  constructor() {}


  static fetchAll_category(callback) {
    let sql_categories = `SELECT * FROM categories`;
      db.query(sql_categories, function (err, dataCate) {
        if (err) throw err;
        callback({categories:dataCate});
      });
    }
  }



