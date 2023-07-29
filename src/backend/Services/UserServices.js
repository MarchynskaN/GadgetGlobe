const userRouter = require("express").Router();
const conn = require("../conn")
httpStatus = require("http-status-codes");


let GadgetModel = require("../Schemas/GadgetModel");
let User = require("../Schemas/UserModel");
let Cart = require("../Schemas/CartModel");
const { ObjectId } = require('mongodb');


// REQUEST
// {
//     "email": "nad",
//     "password": "2123"
// }
userRouter.route("/register").post(async (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        userName,
        email,
        password
    });

    try {
        const savedUser = await newUser.save();
        console.log("User Created");
        const userName = savedUser.userName;
        const email = savedUser.email;
        const userId = savedUser._id;

        const newcart = new Cart({
            userId
        });

        const savedCart = await newcart.save();
        console.log("Cart Created successfully");
        const cartid = savedCart._id;

        res.status(httpStatus.StatusCodes.OK).json({
            "UserAdded": {
                "userName": userName,
                "email": email,
                "userId": userId,
                "cartId": cartid
            }
        });
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

userRouter.post('/addGadget', async (req, res) => {
    const { userId, gadgetId } = req.body;
  
    try {
      if (!isValidObjectId(gadgetId)) {
        return res.status(400).json({ error: 'Invalid ObjectId for gadgetId' });
      }
  
      const gadget = await GadgetModel.Gadget.findById(gadgetId);
      if (!gadget) {
        return res.status(404).json({ error: 'Gadget not found' });
      }
  
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        // If the cart doesn't exist for the user, create a new cart
        cart = new Cart({ userId, gadgets: [] });
      }
  
      const existingGadgetIndex = cart.gadgets.findIndex(
        (cartGadget) => cartGadget.gadget.toString() === gadgetId
      );
  
      if (existingGadgetIndex === -1) {
        // If the gadget is not already in the cart, add it with a quantity of 1
        cart.gadgets.push({ gadget: gadgetId, quantity: 1 });
      } else {
        // If the gadget is already in the cart, increase its quantity by 1
        cart.gadgets[existingGadgetIndex].quantity += 1;
      }
  
      const savedCart = await cart.save();
      res.status(200).json({
        Usergadgets: {
          userId: savedCart.userId,
          gadgets: savedCart.gadgets,
        },
      });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });


// REQUEST
// {
//     "email": "vasu",
//     "password": "2123"
// 
userRouter.route("/login").post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ "email":  email, "password": password })
        .then((user) => {
            if(user !== null) {
                res.json({ "msg": "Log In Successfull", "status": httpStatus.StatusCodes.OK, "user": user })
            } else {
                res.status(httpStatus.StatusCodes.UNAUTHORIZED).json("Error: " + "User not found")
            }
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = userRouter;
