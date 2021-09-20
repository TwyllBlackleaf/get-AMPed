const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String
  }
});

const Image = model('Image', imageSchema);

module.exports = Image;