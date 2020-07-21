const accessToken = require("./accessToken");

const authMiddleware = (req, res, next) => {
  const { authtoken } = req.headers;

  try {
    const sender = accessToken.decodeAceessToken(authtoken);
    req.sender = sender;
    next();
  } catch (error) {
    res.status(401).json({ alert: "Invalid access token" });
  }
};

module.exports = authMiddleware;
