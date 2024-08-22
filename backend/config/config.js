/** @type {import('sequelize').Options} */
module.exports = {
  development: {
    username: 'root',
    password: 'yourpassword',
    database: 'development_db',
    host: '127.0.0.1',
    dialect: 'mysql', // Specify the dialect here
    logging: false,
  },
  test: {
    username: 'root',
    password: 'yourpassword',
    database: 'testing_db',
    host: '127.0.0.1',
    dialect: 'mysql', // Specify the dialect here
    logging: false,
  },
  production: {
    username: 'root',
    password: 'yourpassword',
    database: 'production_db',
    host: '127.0.0.1',
    dialect: 'mysql', // Specify the dialect here
    logging: false,
  },
};
