//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb+srv://client:fpLr30qu96hmxW3B@matcherydb-dyffe.mongodb.net/matchery?retryWrites=true';
//=========================//

const port = process.env.PORT || 5000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Set up default mongoose connection
mongoose.connect(url);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
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

const User = require('./models/user.js')

app.post('/api/account/signup', (req, res, next) => {
  const { body } = req;
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
  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
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
}); // end of sign up endpoint

app.listen(port, () => console.log(`Listening on port ${port}`));