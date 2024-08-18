const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_KEY; // Use JWT_KEY environment variable

if (!jwtSecret) {
  throw new Error('JWT_KEY environment variable is not set');
}

module.exports.jwtSign = async (payload) => {
  return jwt.sign(
    { username: payload.username, email: payload.email },
    jwtSecret, // Use jwtSecret here
  );
};

module.exports.jwtVerify = async (token) => {
  return jwt.verify(token, jwtSecret); // Use jwtSecret here
};
