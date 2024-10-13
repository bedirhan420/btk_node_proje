const express = require('express');
const { createSong, getAllSongs, getSongById, updateSong, deleteSong } = require('../controllers/SongController');
const { auth, isSinger } = require('../middlewares/validate');
const router = express.Router();

router.post('/create', auth, isSinger, createSong); 
router.get('/get', auth, getAllSongs);
router.get('/getById/:id', auth, getSongById); 
router.put('/update/:id', auth, isSinger, updateSong);
router.delete('/delete/:id', auth, isSinger, deleteSong);

module.exports = router;
