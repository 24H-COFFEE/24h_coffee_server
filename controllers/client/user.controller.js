const model = require('../../models/client/user.model')

const readUser = async (req, res) => {

    try {
        const { id } = req.body;
        const results = await model.readUser(id)
        res.json({ status: "success", user: results[0] });
    } catch (error) {
        res.json({ status: "error", error });
    }

}

const updateUser = async (req, res) => {

    try {
        const { id, image, fullName } = req.body;
        const results = await model.updateUser(id, image, fullName)
        res.json({ status: "success", results });

    } catch (error) {
        console.log(error)

        res.json({ status: "error", error });
    }

}

const resetPass = async (req, res) => {

    try {
        const { id, matKhau } = req.body;

        const results = await model.resetPass(id, matKhau)

        res.json({ status: "success", results });

    } catch (error) {
        res.json({ status: "error", error });
    }
}

module.exports = {
    readUser,
    updateUser,
    resetPass
}