const express = require('express');
const router = express.Router();
const SingerController = require('../controllers/SingerController');

router.post('/', SingerController.createSinger);

router.get('/', SingerController.getAllSingers);

router.get('/:id', SingerController.getSingerById);

router.put('/:id', SingerController.updateSinger);

router.delete('/:id', SingerController.deleteSinger);

module.exports = router;
