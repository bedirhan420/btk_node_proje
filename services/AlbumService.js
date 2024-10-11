const Album = require('../models/Album');

const createAlbum = async (albumData) => {
    const album = new Album(albumData);
    return await album.save();
};

const getAllAlbums = async () => {
    return await Album.find().populate('songs').populate('singer').populate('publisher');
};

const getAlbumById = async (albumId) => {
    return await Album.findById(albumId).populate('songs').populate('singer').populate('publisher');
};

const updateAlbum = async (albumId, albumData) => {
    return await Album.findByIdAndUpdate(albumId, albumData, { new: true });
};

const deleteAlbum = async (albumId) => {
    return await Album.findByIdAndDelete(albumId);
};

module.exports = {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
};
