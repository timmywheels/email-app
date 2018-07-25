const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema); // Create collection if it doesn't already exist
