const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  
  username: String,
  hash: String,
  salt: String,
  contactNo : Number,
  name : String,
  profileId : String,
  rides : [ { type : Schema.Types.ObjectId , ref : 'Ride'} ],
  rating : {
    type : Number,
    default : 0.0
  },
  carModel : String,
  carNumber : String,
  photoUrl : String,
  licenseUrl : String,

});


mongoose.model('User', UsersSchema);