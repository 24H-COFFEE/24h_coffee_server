const billModel = require('../../models/server/bill.model.js');
const arrayHelpers = require('../../helpers/array-helpers.js');

const renderPageBill = async (req, res) => {
  try {
    const user = req.session.user;
    const infoPage = {
      title: 'Quản lý hoá đơn',
      avatar: user.anhDaiDien,
      fullname: user.hoVaTen
    }
    const bills = await billModel.getBills();
    const billsReversed = arrayHelpers.reverseArray(bills);
    res.render('bill', { infoPage, bills: billsReversed });
  } catch (error) {
    console.error('Render page bill error', error);
  }
}

const renderPageBillDetail = async (req, res) => {
  const billID = req.params.billID;
  console.log("🚀 ~ file: bill.controller.js:22 ~ renderPageBillDetail ~ billID:", billID)
  try {
    const user = req.session.user;
    const infoPage = {
      title: 'Hoá đơn chi tiết',
      avatar: user.anhDaiDien,
      fullname: user.hoVaTen
    }
    const results = await billModel.getBillByID(billID);
    const bill = results[0];
    const billsDetail = await billModel.getBillsDetail(billID);
    res.render('billDetail', { infoPage, bill, billsDetail });
  } catch (error) {
    console.error('Render page bill detail error', error);
  }
}

module.exports = {
  renderPageBill,
  renderPageBillDetail
}