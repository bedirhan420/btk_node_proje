const Album = require('../models/Album');
const Publisher = require("../models/Publisher");

exports.createAlbum = async (albumData) => {
  const album = new Album(albumData);
  await album.save();

  await Publisher.findByIdAndUpdate(
    albumData.publisher,
    {$push:{albums:album._id}},
    {new:true}
  );

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
