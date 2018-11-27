const mongoose = require('mongoose');
const User = require('./user.js');
const Audition = require('./audition.js');

const CandidateListSchema = new mongoose.Schema({
	candidate: String,
	list: [String],
	notList: [String]
});

module.exports = mongoose.model('CandidateList', CandidateListSchema);

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  candidateLists: [CandidateListSchema],
  admins: [String]
});

module.exports = mongoose.model('Event', EventSchema);

/*const CandidateRankingSchema = new mongoose.Schema({
  user: String,
  rank: String
});

module.exports = mongoose.model('CandidateRanking', CandidateRankingSchema);

const CandidateSchema = new mongoose.Schema({
  user: String,
  rank: String
});

//TODO LOOK WHY THIS IS events not candidates
module.exports = mongoose.model('Candidate', CandidateSchema, 'events');*/