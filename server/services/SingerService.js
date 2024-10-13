const Singer = require('../models/Singer');

exports.createSinger = async (singerData) => {
  const singer = new Singer(singerData);
  await singer.save();
  return singer;
};

exports.getAllSingers = async () => {
  return await Singer.find();
};

exports.getSingerById = async (id) => {
  return await Singer.findById(id);
};

exports.updateSinger = async (id, updateData) => {
  return await Singer.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteSinger = async (id) => {
  await Singer.findByIdAndDelete(id);
};
