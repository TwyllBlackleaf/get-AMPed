const faker = require('faker');

const db = require('../config/connection');
const { User, UserLink } = require('../models');
const userLinkSchema = require('../models/UserLink');

db.once('open', async () => {

  // create user data
  const userData = [];

  for (let i = 0; i < 20; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

    // // create links
    // let linkData = [];
    // for (let i = 0; i < 100; i += 1) {
    //   const linkTitle = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    //   const link = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    //   const linkDesc = faker.lorem.words(Math.round(Math.random() * 40) + 1);

    //   const randomUserIndex = Math.floor(Math.random() * userData.ops.length);
    //   const { _id: linkId } = linkData.ops[randomUserIndex];
  
    //   linkData.push({linkId, linkTitle, link, linkDesc });
  
    //   const updatedUser = await User.updateOne(
    //     { _id: _id },
    //     { $push: { userLink: createdLink._id } }
    //   );
    // }
    // const createdLinks = await UserLink.collection.insertMany(linkData);
  console.log('all done!');
  process.exit(0);
});
