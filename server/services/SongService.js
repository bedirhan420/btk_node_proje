const Song = require('../models/Song');
const Singer = require('../models/Singer');


exports.createSong = async (songData) => {
  const song = new Song(songData);
    await song.save();
  
    await Singer.findByIdAndUpdate(
      songData.singer, 
      { $push: { songs: song._id } }, 
      { new: true } 
    );
  
    return song;
};

exports.getAllSongs = async () => {
  return await Song.find();
};

exports.getSongById = async (id) => {
  return await Song.findById(id);
};

exports.updateSong = async (id, updateData) => {
  return await Song.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteSong = async (id) => {
  await Song.findByIdAndDelete(id);
};
