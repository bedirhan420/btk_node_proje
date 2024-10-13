const express = require('express');
const { createSinger, getAllSingers, getSingerById, updateSinger, deleteSinger } = require('../controllers/SingerController');
const { auth, isSinger } = require('../middlewares/validate'); 
const router = express.Router();

router.post('/create',createSinger);
router.get('/get', auth, getAllSingers); 
router.get('/getById/:id', auth, getSingerById);
router.put('/update/:id', auth, isSinger, updateSinger); 
router.delete('/delete/:id', auth, isSinger, deleteSinger);

module.exports = router;
