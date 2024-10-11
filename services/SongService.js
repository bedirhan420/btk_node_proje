const Song = require('../models/Song');

const createSong = async (SongData) => {
    const Song = new Song(SongData);
    return await Song.save();
};

const getAllSongs = async () => {
    return await Song.find().populate('songs').populate('Song').populate('publisher');
};

const getSongById = async (SongId) => {
    return await Song.findById(SongId).populate('songs').populate('Song').populate('publisher');
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
