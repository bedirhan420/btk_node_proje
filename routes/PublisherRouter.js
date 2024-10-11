const express = require('express');
const router = express.Router();
module.exports = router;
const publisherController = require("../controllers/PublisherController")

router.get('/', publisherController.getAllPublishers);

router.get('/:id', publisherController.getPublisherById);

router.get('/', publisherController.createPublisher);

router.put('/:id', publisherController.updatePublisher);

router.delete('/:id', publisherController.deletePublisher);

module.exports = router;