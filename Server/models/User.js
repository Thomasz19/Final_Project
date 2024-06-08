const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    
    height: {
        type: Number,
        required : true
    },  
    
    weight: {
        type: Number,
        required : true
    },  
    
    age: {
        type: Number,
        required : true
    }
}); 

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;

