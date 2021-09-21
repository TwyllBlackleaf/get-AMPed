const { Schema, model } = require('mongoose');
 
const imageSchema = new Schema(
  {
    title: String,
    image: String
  },
  { timestamps: true }
);
  
module.exports = new model('Image', imageSchema);
