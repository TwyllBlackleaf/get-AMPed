const { Schema } = require('mongoose');

const userLinkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = userLinkSchema;