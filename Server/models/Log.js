/**
 * models/Log.js
 *
 * This file defines the schema for the Log collection in MongoDB using Mongoose.
 *
 * Author: [Andrew Becker]
 * Date: [6/20/2024]
 */

const mongoose = require('mongoose');

// Define the Log schema
const LogSchema = new mongoose.Schema({
  // Workout name
  workout: {
    type: String,
    required: true
  },
  // Exercise name
  exercise: {
    type: String,
    required: true
  },
  // Weight used in the exercise
  weight: {
    type: Number,
    required: true
  },
  // Number of repetitions performed
  reps: {
    type: Number,
    required: true
  },
  // Timestamp of when the log was created
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  // Reference to the user who created the log
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
});

// Create the Log model from the schema
const LogModel = mongoose.model('logs', LogSchema);

// Export the Log model for use in other files
module.exports = LogModel;
