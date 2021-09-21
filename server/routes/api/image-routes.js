const router = require('express').Router();
const {
  getItems,
  createItem
} = require('../../controllers/image-controller');

router.route('/')
  .get(getItems)
  .post(createItem);

module.exports = router;
