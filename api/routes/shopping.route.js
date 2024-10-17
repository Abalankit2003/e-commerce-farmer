const express = require("express");
const {
  addProductItems,
  getAllProducts,
  getProductById,
  addToCart,
  getCartItems,
} = require("../controllers/shopping.controller.js");
const verifyFarmer = require("../util/verifyFarmer.js");


const router = express.Router();

router.post("/addProductItems", addProductItems);
router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.post("/addToCart", verifyFarmer, addToCart);
router.get("/getCartItems", verifyFarmer, getCartItems);

module.exports = router;
