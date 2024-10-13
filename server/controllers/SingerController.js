const singerService = require('../services/SingerService');

exports.createSinger = async (req, res) => {
  try {
    const singer = await singerService.createSinger(req.body);
    res.status(201).json(singer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllSingers = async (req, res) => {
  try {
    const singers = await singerService.getAllSingers();
    res.status(200).json(singers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSingerById = async (req, res) => {
  try {
    const singer = await singerService.getSingerById(req.params.id);
    if (!singer) return res.status(404).json({ message: 'Singer not found' });
    res.status(200).json(singer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSinger = async (req, res) => {
  try {
    const updatedSinger = await singerService.updateSinger(req.params.id, req.body);
    if (!updatedSinger) return res.status(404).json({ message: 'Singer not found' });
    res.status(200).json(updatedSinger);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSinger = async (req, res) => {
  try {
    await singerService.deleteSinger(req.params.id);
    res.status(200).json({ message: 'Singer deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
