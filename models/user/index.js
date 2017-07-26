import Sequelize from 'sequelize';
import sequelize from '../../server/sequelize';

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
});

User.sync({ force: true }).then(() =>
    // Table created
     User.create({
         firstName: 'John',
         lastName: 'Hancock',
     }));

export default User;
