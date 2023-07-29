const gadgetRouter = require("express").Router();
const GadgetModel = require("../Schemas/GadgetModel");

//http://localhost:3000/gadgets/
gadgetRouter.route("/").get((req, res) => {
    GadgetModel.Gadget.find()
        .then((gadgets) => res.json(gadgets))
        .catch((err) => res.status(400).json("Error: " + err));
});

//http://localhost:3000/gadgets/6422c460d386a575c9dad6d8
gadgetRouter.route("/:id").get((req, res) => {
    GadgetModel.Gadget.findById(req.params.id)
        .then((gadgets) => res.json(gadgets))
        .catch((err) => res.status(400).json("Error: " + err));
});

//http://localhost:3000/gadgets/name/Oppo%Reno3%Pro
gadgetRouter.route("/name/:name").get((req, res) => {
    const searchName = req.params.p_name;
    const regex = new RegExp(searchName, "i");
    GadgetModel.Gadget.find({ "name": regex })
        .then((gadgets) => res.json(gadgets))
        .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = gadgetRouter;
