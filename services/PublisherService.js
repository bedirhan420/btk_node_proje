const Publisher = require('../models/publisher');

const createPublisher = async (PublisherData) => {
    const Publisher = new Publisher(PublisherData);
    return await Publisher.save();
};

const getAllPublishers = async () => {
    return await Publisher.find().populate('Singer');
};

const getPublisherById = async (publisherId) => {
    return await Publisher.findById(publisherId).populate('Singer');
};

const updatePublisher = async (publisherId, publisherData) => {
    return await Publisher.findByIdAndUpdate(publisherId, publisherData, { new: true });
};

const deletePublisher = async (publisherId) => {
    return await Publisher.findByIdAndDelete(publisherId);
};

module.exports = {
    createPublisher,
    getAllPublishers,
    getPublisherById,
    updatePublisher,
    deletePublisher
};
