const publisherService = require('../services/PublisherService');

// Create Publisher
exports.createPublisher = async (req, res) => {
  try {
    const publisher = await publisherService.createPublisher(req.body);
    res.status(201).json(publisher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Publishers
exports.getAllPublishers = async (req, res) => {
  try {
    const publishers = await publisherService.getAllPublishers();
    res.status(200).json(publishers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Publisher By ID
exports.getPublisherById = async (req, res) => {
  try {
    const publisher = await publisherService.getPublisherById(req.params.id);
    if (!publisher) return res.status(404).json({ message: 'Publisher not found' });
    res.status(200).json(publisher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Publisher
exports.updatePublisher = async (req, res) => {
  try {
    const updatedPublisher = await publisherService.updatePublisher(req.params.id, req.body);
    if (!updatedPublisher) return res.status(404).json({ message: 'Publisher not found' });
    res.status(200).json(updatedPublisher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Publisher
exports.deletePublisher = async (req, res) => {
  try {
    await publisherService.deletePublisher(req.params.id);
    res.status(200).json({ message: 'Publisher deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
