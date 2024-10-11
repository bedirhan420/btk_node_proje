const SingerService = require('../services/SingerService');

const createSinger = async (req, res) => {
    try {
        const Singer = await SingerService.createSinger(req.body);
        res.status(201).json(Singer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllSingers = async (req, res) => {
    try {
        const Singers = await SingerService.getAllSingers();
        res.status(200).json(Singers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSingerById = async (req, res) => {
    try {
        const Singer = await SingerService.getSingerById(req.params.id);
        if (!Singer) {
            return res.status(404).json({ message: 'Singer not found' });
        }
        res.status(200).json(Singer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateSinger = async (req, res) => {
    try {
        const Singer = await SingerService.updateSinger(req.params.id, req.body);
        if (!Singer) {
            return res.status(404).json({ message: 'Singer not found' });
        }
        res.status(200).json(Singer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteSinger = async (req, res) => {
    try {
        const Singer = await SingerService.deleteSinger(req.params.id);
        if (!Singer) {
            return res.status(404).json({ message: 'Singer not found' });
        }
        res.status(200).json({ message: 'Singer deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createSinger,
    getAllSingers,
    getSingerById,
    updateSinger,
    deleteSinger
};
