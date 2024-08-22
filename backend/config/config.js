/** @type {import('sequelize').Options} */
module.exports = {
   ht: {
    username: 'root',  // Your database username
    password: 'password123',  // Your database password
    database: 'ht',  // Your database name
    host: 'ht.clikieeiijdc.us-east-1.rds.amazonaws.com:3306',  // Add the missing comma here
    dialect: 'mysql'  // Correctly defined dialect
  },
};
