const mongoose = require('mongoose')
const LogSchema = new mongoose.Schema({
    
    
    workout: {
        type: String,
        required : true
    },
    
}); 

const LogModel = mongoose.model('logs', LogSchema);

module.exports = LogModel;

