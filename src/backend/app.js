const express=require("express")
const app=express();
const cors = require('cors');
const Student=require("./user");
app.use(cors());
require("./conn")
app.use(express.json());
app.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Create a new user document
      const newUser = new Student({
        username,
        email,
        password,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while registering the user.',details: error.message });
    }
  });
  
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email in the database
      const user = await Student.findOne({ email });
  
      // Check if the user exists and the provided password matches
      if (user && user.password === password) {
        return res.status(200).json({ message: 'Login successful!' });
      } else {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while logging in.', details: error.message });
    }
  });

app.listen(5000,()=>{
    console.log("connection setup");
})