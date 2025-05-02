// script.js
const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

module.exports = encrypt;

// Test block (only runs if this file is executed directly)
if (require.main === module) {
  const testPayload = { userId: 42 };
  const testSecret = 'secretKey';
  const token = encrypt(testPayload, testSecret);
  console.log('Token:', token);
}
