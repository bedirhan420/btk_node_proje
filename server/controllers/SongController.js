const songService = require('../services/SongService');

exports.createSong = async (req, res) => {
  try {
    const song = await songService.createSong(req.body);
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await songService.getAllSongs();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const song = await songService.getSongById(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });
    song.views = (song.views || 0) + 1;
    await song.save();
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const updatedSong = await songService.updateSong(req.params.id, req.body);
    if (!updatedSong) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    await songService.deleteSong(req.params.id);
    res.status(200).json({ message: 'Song deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};