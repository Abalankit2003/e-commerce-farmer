const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true
    },

    productPrice : {
        type : String,
        required : true
    },

    productImages : {
        type : Array,
        required : true
    }
});

const productModel = mongoose.model('productModel', productSchema);

module.exports = productModel;
