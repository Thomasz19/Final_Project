/**
 * server.js
 *
 * This is the main server file for the FitMaster application. It connects to the MongoDB database,
 * sets up the necessary routes for handling user, exercise, and log data, and starts the server.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const ExerciseModel = require("./models/Exercise");
const LogModel = require("./models/Log"); // Import the LogModel

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://beckera1:yRNp1jzNJN31x2ZB@fitmaster0.40ojfox.mongodb.net/FitMaster?retryWrites=true&w=majority&appName=FitMaster0");

// Start the server on port 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

// Route to get all users
app.get("/getUser", (req, res) => {
  UserModel.find()
    .then(docs => {
      console.log(docs);
      res.json(docs);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch users" });
    });
});

// Route to create a new user
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

// Route to get all exercises
app.get("/getExercise", (req, res) => {
  ExerciseModel.find()
    .then(docs => {
      console.log(docs);
      res.json(docs);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch exercises" });
    });
});

// Route to create a new exercise
app.post("/createExercise", async (req, res) => {
  const exercise = req.body;
  const newExercise = new ExerciseModel(exercise);
  await newExercise.save();
  res.json(exercise);
});

// Route to log an exercise
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

// Route to get logs for a user
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

// Route to get logs grouped by day for a user
app.get("/getLogsGroupedByDay/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const logs = await LogModel.find({ userId });

    // Group logs by day
    const groupedLogs = logs.reduce((acc, log) => {
      const date = new Date(log.timestamp).toISOString().split('T')[0];
      if (!acc[date]) acc[date] = [];
      acc[date].push(log);
      return acc;
    }, {});

    res.json(groupedLogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch logs" });
  }
});

