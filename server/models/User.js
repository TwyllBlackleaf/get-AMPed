const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userLinkSchema = require('./UserLink')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    displayname: {
      type: String,
      default: function() {
        return this.username;
      }
    },
    aboutme: {
      type: String,
      maxlength: 240
    },
    userLink1Title: {
      type: String
    },
    userLink1Description: {
      type: String
    },
    userLink1Link: {
      type: String
    },
    userLink2Title: {
      type: String
    },
    userLink2Description: {
      type: String
    },
    userLink2Link: {
      type: String
    },
    userLink3Title: {
      type: String
    },
    userLink3Description: {
      type: String
    },
    userLink3Link: {
      type: String
    },
    userLinks: [userLinkSchema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `linkCount` with the number of links the user has
userSchema.virtual('linkCount').get(function () {
  return this.userLinks.length;
});

const User = model('User', userSchema);

module.exports = User;