const mongoose = require("mongoose");
const GadgetModel = require("./GadgetModel");

const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    // gadgets: [{
    //     gadget: {
    //         type: GadgetModel.GadgetSchema, 
    //         required: true,
    //         price: {type: Number, default: 0}
    //     },
    //     quantity: {
    //         type: Number,
    //         default: 1,
    //         required: true
    //     }
    // }]
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;