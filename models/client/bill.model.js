const database = require('../../database/database')

// tương tác với database , thực hiện câu lệnh thêm hóa đơn vào db
const insertBillModel = async (id, timeOut, datePayment, tableID, userID) => {
    const query = "INSERT INTO HoaDon(id, gioRa, ngayThanhToan, banID, nguoiDungID) VALUES(?, ?, ?, ?, ?)"
    return await database.queryDatabase(query, [id, timeOut, datePayment, tableID, userID])
}

// tương tác với database , thực hiện câu lệnh lấy thông tin hóa đơn và bàn
const readBillByTableIDModel = async (tableID) => {
    const query = "SELECT HoaDon.id, HoaDon.gioVao, Ban.soThuTu, Ban.trangThaiOrder FROM HoaDon " +
        "RIGHT JOIN Ban ON HoaDon.banID = Ban.id " +
        "WHERE Ban.id = ?"
    return await database.queryDatabase(query, [tableID])
}

// tương tác với database , thực hiện câu lệnh lấy thông tin hóa đơn chi tiết
const readBillDetailModel = async (billID) => {
    const query = "SELECT HoaDonChiTiet.id, HoaDonChiTiet.soLuong, SanPham.anhSanPham, SanPham.tenSanPham, SanPham.giaSanPham FROM HoaDonChiTiet " +
        "INNER JOIN SanPham ON HoaDonChiTiet.sanPhamID = SanPham.id " +
        "WHERE HoaDonChiTiet.hoaDonID = ?"
    return await database.queryDatabase(query, [billID])
}


// tương tác với database , thực hiện câu lệnh thêm hóa đơn chi tiết vào db
const insertBillDetailModel = async (quantity, intoMoney, productID, billID) => {
    const query = "INSERT INTO HoaDonChiTiet(soLuong, thanhTien, sanPhamID, hoaDonID) VALUES(?, ?, ?, ?)"
    return await database.queryDatabase(query, [quantity, intoMoney, productID, billID])
}

module.exports = {
    insertBillModel,
    readBillByTableIDModel,
    readBillDetailModel,
    insertBillDetailModel
}