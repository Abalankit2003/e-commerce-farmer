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


const getAllProducts = async(req, res, next) => {
    try {
        const data = await productModel.find();
        return res.json(data);
    } catch (error) {
        next(customError(400, 'Error while getting products'));
    }
}


const getProductById = async(req, res, next) => {
    const id = req.params.id;
    try {
        const data = await productModel.findById(id);
        return res.json(data);
    } catch (error) {
        next(customError(500, 'Error in fetching the product'));
    }
}

module.exports = { addProductItems, getAllProducts, getProductById };
