<<<<<<< HEAD
const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
    Song_Name: {type:String},
    Song_Type: {type:String},
    Lyrics:{type:String},
    Song_Singer: { type: mongoose.Schema.Singers.ObjectId, ref: 'Singer' },
=======
const Song_Name = new mongoose.Song({
   Sarki_Adi:String
  
>>>>>>> b503cbeac6eee5643013792884b46144fcf50227
})


const Song = mongoose.model('Song',Song);
module.exports = Song;


