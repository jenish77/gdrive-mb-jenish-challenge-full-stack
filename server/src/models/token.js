const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    userId: String,
    accessToken: String,
    refreshToken: String,
  });
  const TokenModel = mongoose.model('Token', tokenSchema);

  module.exports = TokenModel;
