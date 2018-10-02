const mongoose = require('mongoose');
const SessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  time: {
    type: Date,
    default: Date.now()
  },
  isActive: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model('Session', SessionSchema, 'sessions');