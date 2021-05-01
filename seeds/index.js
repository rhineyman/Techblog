const userSeeds = require('./userSeeds');
const postSeeds = require('./userPosts');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await userSeeds();
    await postSeeds();
    process.exit(0);
};

seedAll();