/** @type {import('sequelize').Options} */
module.exports = {
   development: {
    username: 'root',  // Your database username
    password: 'password123',  // Your database password
    database: 'ht',  // Your database name
    host: 'ht.clikieeiijdc.us-east-1.rds.amazonaws.com',  // Add the missing comma here
    dialect: 'mysql'  // Correctly defined dialect
  },
   test: {
    username: 'root',  // Your database username
    password: 'password123',  // Your database password
    database: 'ht',  // Your test database name
    host: 'ht.clikieeiijdc.us-east-1.rds.amazonaws.com',  // Your test database host
    dialect: 'mysql',  // Specify the dialect directl
  },
  production: {
    username: 'root',  // Your database username
    password: 'password123',  // Your database password
    database: 'ht',  // Your production database name
    host: 'ht.clikieeiijdc.us-east-1.rds.amazonaws.com',  // Your production database host
    dialect: 'mysql',  // Specify the dialect directly
  },
};
