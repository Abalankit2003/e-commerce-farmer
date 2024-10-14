const express = require("express");
const {addProductItems} = require("../controllers/shopping.controller.js");


const router = express.Router();

router.post("/addProductItems", addProductItems);

module.exports = router;
