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
    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;