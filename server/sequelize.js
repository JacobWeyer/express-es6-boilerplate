import Sequelize from 'sequelize';

const { DB_NAME, DB_USER, DB_PASS, DB_HOST = 'localhost', DB_DIALECT = 'postgres' } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
});

export default sequelize;
