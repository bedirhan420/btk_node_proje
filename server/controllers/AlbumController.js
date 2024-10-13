const albumService = require('../services/AlbumService');

// Create Album
exports.createAlbum = async (req, res) => {
  try {
    const album = await albumService.createAlbum(req.body);
    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Albums
exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await albumService.getAllAlbums();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Album By ID
exports.getAlbumById = async (req, res) => {
  try {
    const album = await albumService.getAlbumById(req.params.id);
    if (!album) return res.status(404).json({ message: 'Album not found' });
    album.views = (album.views || 0) + 1;
    await album.save();
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Album
exports.updateAlbum = async (req, res) => {
  try {
    const updatedAlbum = await albumService.updateAlbum(req.params.id, req.body);
    if (!updatedAlbum) return res.status(404).json({ message: 'Album not found' });
    res.status(200).json(updatedAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Album
exports.deleteAlbum = async (req, res) => {
  try {
    await albumService.deleteAlbum(req.params.id);
    res.status(200).json({ message: 'Album deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
