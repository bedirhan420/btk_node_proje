const Singer = require('../models/Singer');

const createSinger = async (SingerData) => {
    const Singer = new Singer(SingerData);
    return await Singer.save();
};

const getAllSingers = async () => {
    return await Singer.find().populate('Song');
};

const getSingerById = async (SingerId) => {
    return await Singer.findById(SingerId).populate('Song');
};

const updateSinger = async (SingerId, SingerData) => {
    return await Singer.findByIdAndUpdate(SingerId, SingerData, { new: true });
};

const deleteSinger = async (SingerId) => {
    return await Singer.findByIdAndDelete(SingerId);
};

module.exports = {
    createSinger,
    getAllSingers,
    getSingerById,
    updateSinger,
    deleteSinger
};
