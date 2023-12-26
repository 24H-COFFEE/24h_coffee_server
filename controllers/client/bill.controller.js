const model = require('../../models/client/bill.model')

// thêm hóa đơn
const insertBill = async (req, res) => {
    try {

        const { id, timeOut, datePayment, tableID, userID } = req.body

        const results = await model.insertBill(id, timeOut, datePayment, tableID, userID)

        if (results.affectedRows > 0) {
            res.json({ status: "success" })
        } else {
            res.json({ status: "error" })
        }

    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

module.exports = {
    insertBill
}