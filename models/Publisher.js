const mongoose =  require('mongoose');

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    singer: { type: mongoose.Schema.Types.ObjectId, ref: 'Singer' }});

const Publisher = mongoose.model('Publisher', publisherSchema);
module.exports = Publisher;