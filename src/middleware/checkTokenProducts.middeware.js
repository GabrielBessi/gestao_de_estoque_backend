const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkTokenProductsMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: "unauthorized update" });
  }

  const token = authToken.split(" ")[1];

  jwt.verify(token, process.env.KEYSECRET, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: error.message });
    }
  });

  next();
};

module.exports = checkTokenProductsMiddleware;
