const { Image } = require('../models/Image');

const imageController = {
  async getItems(req, res) {
    const image = await Image.find();
    if (!image) {
      return res.status(404).json({ message: error.message });
    }
    res.status(200).json(image);
  },
  async createItem({ body }, res) {
    const image = await Image.save();
    if (!image) {
      return res.status(404).json({ message: error.message });
    }
    res.status(201).json(item);
  }
};

module.exports = imageController;
