//This file in not used but could be used to extend the app further
const mongoose = require('mongoose')
const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    
    musclegroup: {
        type: String,
        required : true
    },

    // 5 star rating system
    difficulty: {
        type: Number,
        required : true
    },  
    
}); 

const ExerciseModel = mongoose.model('exercises', ExerciseSchema);

module.exports = ExerciseModel;

