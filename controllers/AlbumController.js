const albumService = require('../services/albumService');

const createAlbum = async (req, res) => {
    try {
        const album = await albumService.createAlbum(req.body);
        res.status(201).json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllAlbums = async (req, res) => {
    try {
        const albums = await albumService.getAllAlbums();
        res.status(200).json(albums);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAlbumById = async (req, res) => {
    try {
        const album = await albumService.getAlbumById(req.params.id);
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.status(200).json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateAlbum = async (req, res) => {
    try {
        const album = await albumService.updateAlbum(req.params.id, req.body);
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.status(200).json(album);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteAlbum = async (req, res) => {
    try {
        const album = await albumService.deleteAlbum(req.params.id);
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.status(200).json({ message: 'Album deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
};
