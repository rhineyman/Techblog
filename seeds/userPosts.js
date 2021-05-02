const { Post } = require('../models');

const postData = [{
        title: 'FIRST!',
        content: 'FIRST!',
        user_id: 1

    },
    {
        title: 'Welcome',
        content: 'Hey check this sweet blog out!',
        user_id: 2
    },
    {
        title: 'This really is sweet',
        content: 'Hey this blog actually is pretty awesome!',
        user_id: 1
    },
    {
        title: 'Blog 2: Electric Boogaloo',
        content: 'I heard a rumor there is an even better version of this same blog coming out soon!',
        user_id: 2
    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;