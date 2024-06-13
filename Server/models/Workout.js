const mongoose = require('mongoose')
const WorkoutSchema = new mongoose.Schema({
    // push, pull, legs, full body, etc.
    day: {
        type: String,
        required : true
    },
    
    exercise: {
        type: String,
        required : true
    },
    
    sets: {
        type: Number,
        required : true
    },  
    
    reps: {
        type: Number,
        required : true
    },  
    
    weight: {
        type: Number,
        required : true
    }
}); 

const WorkoutModel = mongoose.model('workouts', WorkoutSchema);

module.exports = WorkoutModel;

