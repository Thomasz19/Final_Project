const express = require("express");
const app = express()
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const ExerciseModel = require("./models/Exercise");
const LogModel = require("./models/Log"); // Add the LogModel

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


app.get("/getExercise", (req, res) => {
    ExerciseModel.find()
  .then(docs => {
    console.log(docs);
  })
  .catch(err => {
    console.error(err);
  });
});



app.post("/createExercise", async (req, res) => {
    const exercise = req.body;
    const newExercise = new ExerciseModel(exercise);
    await newExercise.save();

    res.json(exercise);
});


// Log an exercise
app.post("/logExercise", async (req, res) => {
  try {
    const { userId, workout, exercise, weight, reps } = req.body;
    const log = new LogModel({
      userId,
      workout,
      exercise,
      weight,
      reps,
      timestamp: new Date()
    });
    await log.save();
    res.status(201).json({ message: "Exercise logged successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to log exercise" });
  }
});

// Get logs for a user
app.get("/getLogs/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const logs = await LogModel.find({ userId });
    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch logs" });
  }
});




//  Pass: yRNp1jzNJN31x2ZB

// mongodb+srv://beckera1:yRNp1jzNJN31x2ZB@fitmaster0.40ojfox.mongodb.net/FitMaster?retryWrites=true&w=majority&appName=FitMaster0