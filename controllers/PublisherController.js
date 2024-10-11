const { Publisher } = require('../models/publisher');


const getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.json(publishers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getPublisherById = async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id);
    if (!publisher) {
      return res.status(404).json({ message: 'Publisher not found' });
    }
    res.json(publisher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const createPublisher = async (req, res) => {
  const { name, singers } = req.body;

  const publisher = new Publisher({
    name,
    singers
  });

  try {
    const newPublisher = await publisher.save();
    res.status(201).json(newPublisher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const updatePublisher = async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id);
    if (!publisher) {
      return res.status(404).json({ message: 'Publisher not found' });
    }

    if (req.body.name) {
      publisher.name = req.body.name;
    }

    if (req.body.singers) {
      publisher.singers = req.body.singers;
    }

    const updatedPublisher = await publisher.save();
    res.json(updatedPublisher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deletePublisher = async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id);
    if (!publisher) {
      return res.status(404).json({ message: 'Publisher not found' });
    }

    await publisher.remove();
    res.json({ message: 'Publisher deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPublishers,
  getPublisherById,
  createPublisher,
  updatePublisher,
  deletePublisher
};