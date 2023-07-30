const mongoose = require("mongoose")


const GadgetSchema = new mongoose.Schema({
    p_name: String,
    p_brand: String,
    p_category: {
        type: String,
        enum: ["Laptop", "Watch", "Airpods", "Phone"],
        required: true
    },
    p_price: Number,
    p_img: String,
    p_features: String,
    p_rating: Number,
    p_offers: String
}, { collection : 'gadgets' });

const Gadget = mongoose.model('Gadget', GadgetSchema);
module.exports = { Gadget }; // Export as an object with the key 'Gadget'
