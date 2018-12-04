const mongoose = require('mongoose');

const InviteSchema = new mongoose.Schema({
  eventName: String,
  role: String,
  auditionName: String
});

module.exports = mongoose.model('Invite', InviteSchema);