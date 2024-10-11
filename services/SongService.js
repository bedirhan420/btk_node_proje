const Song = require('../models/Song');

const createSong = async (SongData) => {
    const song = new Song(SongData);
    return await song.save();
};

const getAllSongs = async () => {
    return await Song.find();
};

const getSongById = async (SongId) => {
    return await Song.findById(SongId);
};

const updateSong = async (SongId, SongData) => {
    return await Song.findByIdAndUpdate(SongId, SongData, { new: true });
};

const deleteSong = async (SongId) => {
    return await Song.findByIdAndDelete(SongId);
};

module.exports = {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
};
