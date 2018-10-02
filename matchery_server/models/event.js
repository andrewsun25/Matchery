const mongoose = require('mongoose');
const User = require('./user.js');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  }/*,
  Administrators: [User],
  Judges: [User],
  Candidates: [User]*/
});

module.exports = mongoose.model('Event', EventSchema, 'events');