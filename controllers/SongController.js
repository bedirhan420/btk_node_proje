const SongService = require('../services/SongService');

const createSong = async (req, res) => {
    try {
        const Song = await SongService.createSong(req.body);
        res.status(201).json(Song);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllSongs = async (req, res) => {
    try {
        const Songs = await SongService.getAllSongs();
        res.status(200).json(Songs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSongById = async (req, res) => {
    try {
        const Song = await SongService.getSongById(req.params.id);
        if (!Song) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json(Song);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateSong = async (req, res) => {
    try {
        const Song = await SongService.updateSong(req.params.id, req.body);
        if (!Song) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json(Song);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteSong = async (req, res) => {
    try {
        const Song = await SongService.deleteSong(req.params.id);
        if (!Song) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json({ message: 'Song deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createSong,
    getAllSongs,
    getSongById,
    updateSong,
    deleteSong
};
