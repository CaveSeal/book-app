const mongoose = require('mongoose')

const schema = mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  googleToken: {
    access_token: String,
    refresh_token: String,
    token_type: String,
    expiry_date: String
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  createdOn: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: true
  },
  displayName: String,
  avatarUrl: String,
  isGithubConnected: {
    type: Boolean,
    default: false
  },
  githubAccessToken: {
    type: String
  }
})

const User = mongoose.model('User', schema)

module.exports = User
