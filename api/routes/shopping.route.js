const express = require("express");
const {addProductItems, getAllProducts} = require("../controllers/shopping.controller.js");


const router = express.Router();

router.post("/addProductItems", addProductItems);
router.get("/products", getAllProducts);

module.exports = router;
