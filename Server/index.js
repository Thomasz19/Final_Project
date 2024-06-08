const express = require("express");
const app = express()
const mongoose = require("mongoose");
const UserModel = require("./models/User");

app.use(express.json());


mongoose.connect("mongodb+srv://beckera1:yRNp1jzNJN31x2ZB@fitmaster0.40ojfox.mongodb.net/FitMaster?retryWrites=true&w=majority&appName=FitMaster0")

app.listen(3001, () => {
console.log('Server is running on port 3001');
});







app.get("/getUser", (req, res) => {
    UserModel.find()
  .then(docs => {
    console.log(docs);
  })
  .catch(err => {
    console.error(err);
  });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});


//  Pass: yRNp1jzNJN31x2ZB

// mongodb+srv://beckera1:yRNp1jzNJN31x2ZB@fitmaster0.40ojfox.mongodb.net/FitMaster?retryWrites=true&w=majority&appName=FitMaster0