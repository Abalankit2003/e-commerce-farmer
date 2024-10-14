const express = require("express");
const {
  addProductItems,
  getAllProducts,
  getProductById,
} = require("../controllers/shopping.controller.js");


const router = express.Router();

router.post("/addProductItems", addProductItems);
router.get("/products", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;
