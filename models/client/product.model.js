const database = require('../../database/database')

// tương tác với database , thực hiện câu lệnh truy vấn lấy danh sách sản phẩm
const getListProductModel = async () => {
    const query = "SELECT * FROM SanPham WHERE hienThi = 1"
    return await database.queryDatabase(query, [])
}

module.exports = {
    getListProductModel
}