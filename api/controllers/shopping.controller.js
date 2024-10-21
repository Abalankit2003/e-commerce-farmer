const customError = require("../util/customError");
const { productModel, cartModel } = require("../models/shopping.model.js");
const { findOne } = require("../models/auth.model.js");

const addProductItems = async (req, res, next) => {
  const body = req.body;

  try {
    const products = await productModel.insertMany(body);
    return res.send("successful");
  } catch (error) {
    next(customError(500, "Error while uploading your products"));
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const data = await productModel.find();
    return res.json(data);
  } catch (error) {
    next(customError(400, "Error while getting products"));
  }
};

const getProductById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await productModel.findById(id);
    return res.json(data);
  } catch (error) {
    next(customError(500, "Error in fetching the product"));
  }
};

const addToCart = async (req, res, next) => {
  const farmerId = req.user;
  const { item } = req.body;

  console.log(item);

  try {
    const user = await cartModel.findOne({ farmerId });
    if (!user) {
      const data = await cartModel.create({ farmerId, cartItems: item });
      return res.json(data);
    }

    const data = await cartModel.findOneAndUpdate(
      { farmerId },
      { $push: { cartItems: item } },
      { new: true }
    );
    return res.json(data);

    // return res.send("hello" + user);
  } catch (error) {
    next(customError(400, error.message));
  }
};

const getCartItems = async (req, res, next) => {
  const farmerId = req.user;
  // console.log(farmerId);
  try {

      const data = await cartModel.findOne({farmerId});
      if(!data) return next(customError(400, "Don't have any item in cart"));

      const ids = data.cartItems;

      const AllDetailsOfCartItems = await productModel.find({_id : {$in : ids}});

      // console.log(data);
      // console.log(AllDetailsOfCartItems);

      res.status(200).json(AllDetailsOfCartItems);

  } catch (error) {
    next(customError(400, error.message));
  }
};

module.exports = {
  addProductItems,
  getAllProducts,
  getProductById,
  addToCart,
  getCartItems,
};
