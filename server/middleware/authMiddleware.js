const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized1" });
  }

  const jwtToken = token.split(" ")[1];
  
  try {
    const decoded = jwt.verify(jwtToken, process.env.SECRET_KEY);
    console.log(decoded)

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Unauthorized2" });
  }
};

module.exports = authenticateJWT;
