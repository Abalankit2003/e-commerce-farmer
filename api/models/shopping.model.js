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

const cartSchema = new mongoose.Schema({
    farmerId : {type : String, required : true},
    cartItems : {type : Array}
})

const productModel = mongoose.model('productModel', productSchema);
const cartModel = mongoose.model('cartModel', cartSchema);

module.exports = { productModel, cartModel };
