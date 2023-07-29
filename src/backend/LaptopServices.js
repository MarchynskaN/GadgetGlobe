const bookRouter = require("express").Router();;
const db = require("./conn")
const BookModel = require("./Laptop");

//http://localhost:3000/books/

bookRouter.route("/").get((req, res) => {
    BookModel.Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = bookRouter;