const mongoose = require("mongoose");

const SingerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
});
  
const Singer = mongoose.model('Singer', SingerSchema);
module.exports = Singer;
  