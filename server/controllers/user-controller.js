// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const userController = {
  // get all users for testing
  async getAllUser(req, res) {
    const foundUser = await User.find({}).select('-__v');
    if (!foundUser) {
      return res.status(400).json({ message: 'cannot find user'});
    }
    res.json(foundUser);
  },
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: user ? user.username : params.username }],
    }).select('-__v');

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] }).select('-__v');


    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  async saveUserLink({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        body,
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async updateDisplayname({ user, body }, res) {
    try {
      const newDisplayname = await User.findOneAndUpdate(
        { _id: user._id },
        body,
        { new: true, runValidators: true }
      );
      return res.json(newDisplayname);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async updateUserData({user, body}, res){
    const updateuser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: user ? user.username : params.username }],
    }).select('-__v');
    const token = signToken(updateuser);
    if (!updateuser) {
      return res.status(400).json({ message: "Can't find this user" });
    }
    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
  }
};

module.exports = userController;