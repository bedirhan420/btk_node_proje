const mongoose =  require('mongoose');
const Singer = require('./Singer');

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    singer: [singerSchema]
});

const Publisher = mongoose.model('Publisher', publisherSchema);
module.exports = {Publisher, Singer};