const database = require('../../database/database.js');

const getAccounts = async () => {
  const query = `SELECT * FROM nguoidung`;
  return await database.queryDatabase(query, []);
}

module.exports = {
  getAccounts
}