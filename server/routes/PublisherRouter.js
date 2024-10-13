const express = require('express');
const { createPublisher, getAllPublishers, getPublisherById, updatePublisher, deletePublisher } = require('../controllers/PublisherController');
const { auth, isPublisher } = require('../middlewares/validate'); 
const router = express.Router();

router.post('/create', auth,createPublisher); 
router.get('/get', auth, getAllPublishers); 
router.get('/getById/:id', auth, getPublisherById);
router.put('/update/:id', auth, isPublisher, updatePublisher);
router.delete('/delete/:id', auth, isPublisher, deletePublisher);

module.exports = router;
