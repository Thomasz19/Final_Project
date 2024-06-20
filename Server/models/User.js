/**
 * models/User.js
 *
 * This file defines the schema for the User collection in MongoDB using Mongoose.
 *
 * Author: [Andrew Becker]
 * Date: [6/20/2024]
 */

const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    // Name of the user
    name: {
        type: String,
        required: true
    },
    // Gender of the user
    gender: {
        type: String,
        required: true
    },
    // Height of the user in cm
    height: {
        type: Number,
        required: true
    },
    // Weight of the user in kg
    weight: {
        type: Number,
        required: true
    },
    // Age of the user
    age: {
        type: Number,
        required: true
    }
});

// Create the User model from the schema
const UserModel = mongoose.model('users', UserSchema);

// Export the User model for use in other files
module.exports = UserModel;
