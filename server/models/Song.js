const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  singer: { type: mongoose.Schema.Types.ObjectId, ref: 'Singer', required: true },
  fileUrl: { type: String, required: true },
  views: { type: Number, default: 0 },
});

module.exports = mongoose.model('Song', songSchema);
