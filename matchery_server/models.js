const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  lastName: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  username: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})
const User = mongoose.model('User', userSchema);
module.exports = User;