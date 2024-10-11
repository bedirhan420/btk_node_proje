const Publisher = require('../models/publisher');

const createPublisher = async (PublisherData) => {
    const Publisher = new Publisher(publisherData);
    return await publisher.save();
};

const getAllPublishers = async () => {
    return await Publisher.find().populate('songs').populate('singer').populate('publisher');
};

const getPublisherById = async (publisherId) => {
    return await Publisher.findById(publisherId).populate('songs').populate('singer').populate('publisher');
};

const updatePublisher = async (albumId, albumData) => {
    return await Publisher.findByIdAndUpdate(publisherId, albumData, { new: true });
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
