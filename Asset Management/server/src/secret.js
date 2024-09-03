const crypto = require("crypto");

const secretData = {
  server: {
    port: 8000,
    hostname: "127.0.0.1",
  },
  db: {
    mongodbURL: "mongodb://127.0.0.1:27017/assetDB",
  },
  jwt: {
    activationKey:
      "449cda27dc0c58bd177368dbc81d2c40b9e56c3874380ff1af80142f2de84a58" ||
      crypto.randomBytes(32).toString("hex"),
    accessKey:
      "e72da87437ee6048c1322e668f5f9fe752d32d9f459bdd488c05918c87fc1408" ||
      crypto.randomBytes(32).toString("hex"),
  },
  smtp: {
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    username: "4443d7bb8f7ba6",
    password: "771bf71d618543",
    formAddress: "assetms.mail@gmail.com",
  },

  clientURL: "http://127.0.0.1:3000",
};

module.exports = secretData;
