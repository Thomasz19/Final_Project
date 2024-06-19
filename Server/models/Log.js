const mongoose = require('mongoose')
const LogSchema = new mongoose.Schema({
    workout: {
        type: String,
        required: true
      },
      exercise: {
        type: String,
        required: true
      },
      weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now,
        required: true
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
      }
    });

const LogModel = mongoose.model('logs', LogSchema);

module.exports = LogModel;

