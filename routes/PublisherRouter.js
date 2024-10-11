const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/', publisherController.getAllPublishers);

router.get('/:id', publisherController.getPublishersById);

router.get('/', publisherController.createPublisher);

router.put('/:id', publisherController.updatePublisher);

router.delete('/:id', publisherController.deletePublisher);

module.exports = router;