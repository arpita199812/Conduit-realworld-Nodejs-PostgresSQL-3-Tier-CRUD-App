/** @type {import('sequelize').Options} */
module.exports = {
  development: {
    username: 'root',  // Your database username
    password: 'password123',  // Your database password
    database: 'ht',  // Your database name
    host: 'ht.clikieeiijdc.us-east-1.rds.amazonaws.com:3306'
    dialect: 'mysql',  // Specify the dialect directly
    logging: true,  // Optional: Set to false to disable SQL query logging
    jwtKey: process.env.JWT_KEY,  // JWT key for development
  },
  test: {
    username: 'root',  // Your database username
    password: 'root',  // Your database password
    database: 'database_testing',  // Your test database name
    host: '127.0.0.1',  // Your test database host
    dialect: 'mysql',  // Specify the dialect directly
    logging: true,  // Optional: Set to false to disable SQL query logging
    jwtKey: process.env.JWT_KEY,  // JWT key for test
  },
  production: {
    username: 'root',  // Your database username
    password: 'root',  // Your database password
    database: 'database_production',  // Your production database name
    host: '127.0.0.1',  // Your production database host
    dialect: 'mysql',  // Specify the dialect directly
    logging: false,  // Optional: Set to false to disable SQL query logging
    jwtKey: process.env.JWT_KEY,  // JWT key for production
  },
};
