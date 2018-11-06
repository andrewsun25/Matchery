const mongoose = require('mongoose');

const AuditionSchema = new mongoose.Schema({
  auditionName: String,
  eventName: String,
  admins: [String],
  candidates: [],
  list: [String],
  newList: [String],
  notList: [String]
});

module.exports = mongoose.model('Audition', AuditionSchema, 'auditions');