const model = require('../../models/client/user.model')
const cloudinary = require('../../cloud/cloudinary')
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const strorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'client-image',
    allowedFormats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
})
const upload = multer({
    storage: strorage
})

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

    const file = req.files['img'][0]
    res.sen(file)

    // try {
    //     const { id, image, fullName } = req.body;
    //     const results = await model.updateUser(id, image, fullName)
    //     res.json({ status: "success", results });

    // } catch (error) {
    //     console.log(error)

    //     res.json({ status: "error", error });
    // }

}

const resetPass = async (req, res) => {

    try {
        const { userName, password } = req.body;
        console.log(userName, password)
        const results = await model.resetPass(userName, password)

        res.json(results);

    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
}

module.exports = {
    readUser,
    updateUser,
    resetPass,
    upload
}