const gadgetRouter = require("express").Router();
const GadgetModel = require("../Schemas/GadgetModel");

//Get all Gadgets WORKS
//http://localhost:3300/gadgets/
gadgetRouter.route("/").get((req, res) => {
    GadgetModel.Gadget.find()
        .then((gadgets) => res.json(gadgets))
        .catch((err) => res.status(400).json("Error: " + err));
});

//Find by id: doesn`t work
// http://localhost:3300/gadgets/64c5adf1200a752587a5735f
gadgetRouter.route("/:id").get((req, res) => {
  const objectId = mongoose.Types.ObjectId(req.params.id);
    GadgetModel.Gadget.findById(objectId)
      .then((gadget) => {
        if (!gadget) {
          return res.status(404).json("Gadget not found");
        }
        res.json(gadget);
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

//Find by name: doesn`t work
//http://localhost:3300/gadgets/search/Oppo%Reno3%Pro
gadgetRouter.route("/search/:name").get((req, res) => {
    const searchName = req.params.name;
    console.log("Searching for: " + searchName);
    const regex = new RegExp(searchName, "i");
    GadgetModel.Gadget.find({ "p_name": regex })
    .then((gadgets) => res.json(gadgets))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Find by category: doesn`t work
// http://localhost:3300/gadgets/:category
gadgetRouter.route("/:category").get((req, res) => {
    const searchCategory = req.params.category;
    GadgetModel.Gadget.find({ "p_category": searchCategory })
        .then((gadgets) => res.json(gadgets))
        .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = gadgetRouter;
