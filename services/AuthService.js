const jwt = require('jsonwebtoken');
require("dotenv").config();


const secretKey = proccess.env.JWT_KEY;

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username }, 
    secretKey, 
    { expiresIn: '1h' }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, verifyToken };
