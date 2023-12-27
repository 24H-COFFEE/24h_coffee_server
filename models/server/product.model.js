const database = require('../../database/database.js');

const getProductsByCategoryID = async (categoryID) => {
  const query = `SELECT * FROM sanpham WHERE hienThi = 1 AND danhMucID=?;`;
  return await database.queryDatabase(query, [categoryID]);
}

module.exports = {
  getProductsByCategoryID
}