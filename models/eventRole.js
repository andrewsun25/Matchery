const mongoose = require('mongoose');

const EventRoleSchema = new mongoose.Schema({
	role: String,
	eventName: String,
  	auditionName: {
	  type: String,
	  default: ''
	},
});

module.exports = mongoose.model('EventRole', EventRoleSchema);