const jwt = require('jsonwebtoken');
const privateKey = process.env.JWT_KEY;

// Sign a JWT token
module.exports.jwtSign = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { username: payload.username, email: payload.email },
      privateKey,
      { expiresIn: '1h' }, // Token expires in 1 hour, adjust as needed
      (err, token) => {
        if (err) return reject(err);
        resolve(token);
      }
    );
  });
};

// Verify a JWT token
module.exports.jwtVerify = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
};

