const jwt = require("jsonwebtoken");

const secretKey = "THIS_IS_MY_SECRET_KEY";

exports.createAccessToken = (sender) =>
  jwt.sign(
    { id: sender.id, email: sender.email, name: sender.name },
    secretKey
  );

exports.decodeAceessToken = (accessToken) => jwt.verify(accessToken, secretKey);
