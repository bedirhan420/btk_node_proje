const Publisher = require('../models/Publisher');

exports.createPublisher = async (publisherData) => {
  const publisher = new Publisher(publisherData);
  await publisher.save();
  return publisher;
};

exports.getAllPublishers = async () => {
  return await Publisher.find();
};

exports.getPublisherById = async (id) => {
  return await Publisher.findById(id);
};

exports.updatePublisher = async (id, updateData) => {
  return await Publisher.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deletePublisher = async (id) => {
  await Publisher.findByIdAndDelete(id);
};
