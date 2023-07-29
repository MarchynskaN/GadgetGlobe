const cartRouter = require("express").Router();

let Cart = require("../Schemas/CartModel");


//http://localhost:3300/cart/64c4e3752acb8538422a2ebd
cartRouter.route("/:id").get(async (req, res) => {
    try {
        const cart = await Cart.findOne({ "userId": req.params.id });
        console.log("Cart find", cart);
        const gadgets = cart.gadgets
        res.status(httpStatus.StatusCodes.OK).json({
            "Cart": cart
        });
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});


module.exports = cartRouter;