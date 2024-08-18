const jwt = require("jsonwebtoken");
const privateKey = process.env.JWT_KEY;

if (!privateKey) {
  console.error('JWT_KEY environment variable is not set');
  throw new Error('JWT_KEY environment variable is not set');
}

module.exports.jwtSign = async (payload) => {
  return jwt.sign(
    { username: payload.username, email: payload.email },
    privateKey
  );
};

module.exports.jwtVerify = async (token) => {
  return jwt.verify(token, privateKey);
};
