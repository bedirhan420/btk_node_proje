const express = require('express');
const { createAlbum, getAllAlbums, getAlbumById, updateAlbum, deleteAlbum } = require('../controllers/AlbumController');
const { auth, isPublisher } = require('../middlewares/validate'); 
const router = express.Router();

router.post('/create', auth, isPublisher, createAlbum); 
router.get('/get', auth, getAllAlbums)
router.get('/getById/:id', auth, getAlbumById);
router.put('/update/:id', auth, isPublisher, updateAlbum); 
router.delete('/delete/:id', auth, isPublisher, deleteAlbum); 

module.exports = router;
