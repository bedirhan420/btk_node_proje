const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    releaseDate: { type: Date },
    publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    singer: { type: mongoose.Schema.Types.ObjectId, ref: 'Singer' }
});
  
const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
  