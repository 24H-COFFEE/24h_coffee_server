const connection = require("../../database/database.js")

// lấy thông tin người dùng theo id
const readUser = async (id) => {

    const query = "SELECT * FROM nguoidung WHERE tenDangNhap = ?";

    return await connection.queryDatabase(query, [id])

}

// cập nhật thông người dùng
const updateUser = async (id, image, fullName) => {

    const query = "UPDATE NguoiDung SET hoVaTen = ?, anhDaiDien = ? WHERE tenDangNhap = ?";

    return await connection.queryDatabase(query, [fullName, image, id])

}

module.exports = {
    readUser,
    updateUser
};