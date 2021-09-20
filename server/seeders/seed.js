const User = require('../models/User');
const mongoose = require('mongoose');
const db = require('../config/connection');

const Users = [
    new User({
        username: "Test User 1",
        email: "testuser1@test.com",
        password: "password",
        displayname: "TestUser1",
        aboutme: "TestUser1 About Me stuff",
        userLinks: [
            {
                title: "Test link title 1a",
                link: "Test link 1a",
                description: "Test link description 1a"
            },
            {
                title: "Test link title 1b",
                link: "Test link 1b",
                description: "Test link description 1b"
            },
            {
                title: "Test link title 1c",
                link: "Test link 1c",
                description: "Test link description 1c"
            }
        ]
    },
    {
        username: "Test User 2",
        email: "testuser2@test.com",
        password: "password",
        displayname: "TestUser2",
        aboutme: "TestUser2 About Me stuff",
        userLinks: [
            {
                title: "Test link title 2a",
                link: "Test link 2a",
                description: "Test link description 2a"
            },
            {
                title: "Test link title 2b",
                link: "Test link 2b",
                description: "Test link description 2b"
            },
            {
                title: "Test link title 2c",
                link: "Test link 2c",
                description: "Test link description 2c"
            }
        ]
    },
    {
        username: "Test User 3",
        email: "testuser3@test.com",
        password: "password",
        displayname: "TestUser3",
        aboutme: "TestUser3 About Me stuff",
        userLinks: [
            {
                title: "Test link title 3a",
                link: "Test link 3a",
                description: "Test link description 3a"
            },
            {
                title: "Test link title 3b",
                link: "Test link 3b",
                description: "Test link description 3b"
            },
            {
                title: "Test link title 3c",
                link: "Test link 3c",
                description: "Test link description 3c"
            }
        ]
    },
    {
        username: "Test User 4",
        email: "testuser4@test.com",
        password: "password",
        displayname: "TestUser4",
        aboutme: "TestUser4 About Me stuff",
        userLinks: [
            {
                title: "Test link title 4a",
                link: "Test link 4a",
                description: "Test link description 4a"
            },
            {
                title: "Test link title 4b",
                link: "Test link 4b",
                description: "Test link description 4b"
            },
            {
                title: "Test link title 4c",
                link: "Test link 4c",
                description: "Test link description 4c"
            },
            {
                title: "Test link title 4d",
                link: "Test link 4d",
                description: "Test link description 4d"
            },
            {
                title: "Test link title 4e",
                link: "Test link 4e",
                description: "Test link description 4e"
            },
            {
                title: "Test link title 4f",
                link: "Test link 4f",
                description: "Test link description 4f"
            }
        ]
    },
    {
        username: "Test User 5",
        email: "testuser5@test.com",
        password: "password",
        displayname: "TestUser5",
        aboutme: "TestUser5 About Me stuff",
        userLinks: []
    },
    {
        username: "Test User 6",
        email: "testuser6@test.com",
        password: "password",
        displayname: "TestUser6",
        aboutme: "TestUser6 About Me stuff",
        userLinks: []
    },
    {
        username: "Test User 7",
        email: "testuser7@test.com",
        password: "password",
        displayname: "TestUser7",
        aboutme: "TestUser7 About Me stuff",
        userLinks: []
    },
    {
        username: "Test User 8",
        email: "testuser8@test.com",
        password: "password",
        displayname: "TestUser8",
        aboutme: "TestUser8 About Me stuff",
        userLinks: []
    }

    )
]

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/get-amped', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(() => {
        console.log("was connected to dev db");
    })

Users.map(async (p, index) => {
    await p.save((err, result) => {
        if (index === Users.length -1) {
            console.log("finished seeding db");
            mongoose.disconnect();
        }
    });
})