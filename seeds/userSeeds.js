const { User } = require('../models');

const userData = [{
        username: 'Mike',
        password: 'Rhiney'

    },
    {
        username: 'Tiberius',
        password: 'Kirk'
    }
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;