module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        mail: {
            type: Sequelize.STRING
        }
    });

    return User;
};
