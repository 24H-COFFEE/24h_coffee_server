const database = require('../../database/database')

// tương tác với database , thực hiện câu lệnh thêm đơn hàng vào db
const insertBill = async (id, timeOut, datePayment, tableID, userID) => {
    const query = "INSERT INTO HoaDon(id, gioRa, ngayThanhToan, banID, nguoiDungID) VALUES(?, ?, ?, ?, ?)"
    return await database.queryDatabase(query, [id, timeOut, datePayment, tableID, userID])
}

module.exports = {
    insertBill
}