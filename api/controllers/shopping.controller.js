const customError = require("../util/customError");
const productModel = require("../models/shopping.model.js");

const addProductItems = async (req, res, next) => {
    const body = req.body;

    try {
        const products = await productModel.insertMany(body);
        return res.send("successful");
    } catch (error) {
        next(customError(500, 'Error while uploading your products'));
    }
}

module.exports = {addProductItems};
