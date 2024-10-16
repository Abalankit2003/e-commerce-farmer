const express = require("express");
const {
  addProductItems,
  getAllProducts,
  getProductById,
  addToCart,
} = require("../controllers/shopping.controller.js");
const verifyFarmer = require("../util/verifyFarmer.js");


const router = express.Router();

router.post("/addProductItems", addProductItems);
router.get("/products", getAllProducts);
router.get("/:id", getProductById);
router.post("/addToCart", verifyFarmer, addToCart);

module.exports = router;
