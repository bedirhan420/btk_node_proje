
const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
    Song_Name: {type:String},
    Song_Type: {type:String},
    Lyrics:{type:String},
    Song_Singer: { type: mongoose.Schema.Types.ObjectId, ref: 'Singer' },
})


const Song = mongoose.model('Song',SongSchema);
module.exports = Song;


