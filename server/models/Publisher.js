const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
});

module.exports = mongoose.model('Publisher', publisherSchema);
