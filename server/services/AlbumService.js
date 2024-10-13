const Album = require('../models/Album');

exports.createAlbum = async (albumData) => {
  const album = new Album(albumData);
  await album.save();
  return album;
};

exports.getAllAlbums = async () => {
  return await Album.find();
};

exports.getAlbumById = async (id) => {
  return await Album.findById(id);
};

exports.updateAlbum = async (id, updateData) => {
  return await Album.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteAlbum = async (id) => {
  await Album.findByIdAndDelete(id);
};
