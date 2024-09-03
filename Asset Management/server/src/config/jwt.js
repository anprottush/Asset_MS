const jwt = require("jsonwebtoken");
const secretData = require("../secret");

const generateToken = (payload) => {
  const secretKey = secretData.jwt.activationKey;

  const jwtToken = jwt.sign(payload, secretKey, { expiresIn: "20m" });

  return jwtToken;
};

module.exports = { generateToken };
