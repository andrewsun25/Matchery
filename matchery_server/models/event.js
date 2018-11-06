const mongoose = require('mongoose');
const User = require('./user.js');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  candidateLists: []
});

module.exports = mongoose.model('Event', EventSchema, 'events');

const CandidateRankingSchema = new mongoose.Schema({
  user: String,
  rank: String
});

module.exports = mongoose.model('CandidateRanking', CandidateRankingSchema);

const AuditionSchema = new mongoose.Schema({
  auditionName: String,
  eventName: String,
  admins: [String],
  candidates: [CandidateRankingSchema]
});

module.exports = mongoose.model('Audition', AuditionSchema, 'auditions');

const CandidateSchema = new mongoose.Schema({
  user: String,
  rank: String
});

//TODO LOOK WHY THIS IS events not candidates
module.exports = mongoose.model('Candidate', CandidateSchema, 'events');