const port = 3300;
const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors');
const gadgets = require('../data/gadgets.json');
const Gadget = require("./Schemas/GadgetModel");
const userRoute = require("./Services/UserServices")
const gadgetRoute = require("./Services/GadgetsServices")
const cartRoute = require("./Services/CartServices")
const conn = require("./conn")


app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const allowedOrigins = ["deployed-app-link", "http://localhost:3000"];
// app.use(cors({
//     origin: allowedOrigins
// }));
app.use(cors());

conn.once('open', async () => {
  try {
      await Gadget.deleteMany({});
      console.log('All data deleted successfully!');
      await Gadget.insertMany(gadgets["gadgets"]);
      console.log('Data inserted successfully!');
  } catch (err) {
      console.log("Error: " + err);
  } finally {
      // conn.close();
  }
});

app.use('/gadgets', gadgetRoute);
app.use('/user', userRoute);
app.use('/cart', cartRoute);

app.listen(port, ()=> {
  console.log("server running on 3300");
});