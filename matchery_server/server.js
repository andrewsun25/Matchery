//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose').set('debug', true);
const app = express();
const url = 'mongodb+srv://client:fpLr30qu96hmxW3B@matcherydb-dyffe.mongodb.net/matchery?retryWrites=true';
//=========================//

const port = process.env.PORT || 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

//Set up default mongoose connection
mongoose.connect(url);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/api/hello', (req, res) => {
  res.send({
    express: 'Hello From Express'
  });
});

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
});

//==========================//
//====GET ALL SIGNATURES===//
app.get('/api/users', function(req, res) {
  User.find({}).then(eachOne => {
    res.json(eachOne);
  });
});

app.get('/match', function(req, res) {

  const spawn = require("child_process").spawn;
  data = {
    "applicantPreferences": {
      "andrew": ["aristocats", "ghostlights"],
      "zhi": ["singers", "sensasians"],
      "will": ["ghostlights", "aristocats"]
    },

    "groupPreferences": {
      "aristocats": ["andrew", "will"],
      "sensasians": ["zhi"],
      "singers": ["andrew"],
      "ghostlights": ["andrew"]
    },

    "groupQuotas": {
      "aristocats": 2,
      "sensasians": 2,
      "singers": 2,
      "ghostlights": 2
    }
  }

  const pythonProcess = spawn('python', ["python/match.py", JSON.stringify(data)]);
  pythonProcess.stdout.on('data', (data) => {
    return res.send({
      success: true,
      data: data.toString().trim()
    });
  });
});
//==========================//
//====POST NEW SIGNATURE===//
app.post('/api/users', function(req, res) {
  console.log(req.body);
  User.create({
    username: req.body.username,
    password: req.body.password,
  }).then(user => {
    res.json(user)
  });
});
//==========================//

const User = require('./models/user.js');
const Session = require('./models/session.js');
const Event = require('./models/event.js');

app.post('/api/account/signup', (req, res, next) => {
  const {
    body
  } = req;
  const {
    password
  } = body;
  let {
    username,
    firstName,
    lastName,
    email
  } = body;

  if (!username) {
    return res.send({
      success: false,
      message: 'Error: Username cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  username = username.trim();

  User.find({
    $or:[ {username: username}, {email: email} ]
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account username or email already exists.'
      });
    }
    // Save the new user
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;
    newUser.username = username;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      });
    });
  });
});

app.post('/api/account/signin', (req, res, next) => {
    const { body } = req;
    const {
      password
    } = body;
    let {
      username
    } = body;
    if (!username) {
      return res.send({
        success: false,
        message: 'Error: Username cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }
    username = username.trim();
    User.find({
      username: username
    }, (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Invalid username or password'
        });
      }
      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Invalid username or password'
        });
      }
      // Otherwise correct user
      const session = new Session();
      session.userId = user._id;
      session.save((err, session) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: 'Error: server error'
          });
        }
        return res.send({
          success: true,
          message: 'Sign in successful',
          token: session._id,
          username: username
        });
      });
    });
  });

app.get('/api/account/verify', (req, res, next) => {
    const { query } = req;
    const { token } = query;
    // Verify the token is one of a kind and it's not deleted.
    Session.find({
      _id: token,
      isActive: true
    }, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      } else {
        // DO ACTION
        return res.send({
          success: true,
          message: 'Verified'
        });
      }
    });
  });

app.get('/api/account/logout', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    Session.findOneAndUpdate({
      _id: token,
      isActive: true
    }, {
      $set: {
        isActive:false
      }
    }, null, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Logout successful'
      });
    });
  });

app.post('/api/account/getEvents', (req, res, next) => {
    const { body } = req;
    let {
      username
    } = body;

    username = username.trim();
    User.find({
      username: username
    }, (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Invalid username or password'
        });
      }
      const user = users[0];
      // Otherwise correct user
      const eventRole = user.Events[0];

      return res.send({
          success: true,
          eventRoles: user.Events
        });
    });
  });

app.post('/api/account/getSingleEvent', (req, res, next) => {
    const { body } = req;
    let {
      username,
      eventName
    } = body;

    Event.find({
      name: eventName
    }, (err, events) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (events.length != 1) {
        return res.send({
          success: false,
          message: 'Invalid event name',
          events: events
        });
      }
      let event = events[0];
      return res.send({
        success: true,
        event: event
      });
      // Otherwise correct user
      /*event.candidateLists.forEach((candidateObject) => {
        if (candiateObject.candidate === username) {
          return res.send({
            success: true,
            candidateObject: candidateObject
          });
        } 
      });*/
      return res.send({
          success: false,
          message: "Invalid user"
        });
    });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));