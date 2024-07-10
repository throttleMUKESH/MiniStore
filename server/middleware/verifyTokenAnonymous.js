const jwt = require("jsonwebtoken");

const verifyTokenAnonymous = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next();
  }

  jwt.verify(token, process.env.JWT_KEY, (err, data) => {
    if (err) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized user",
      });
    }

    req._id = data._id;
    next();
  });
};

module.exports = verifyTokenAnonymous;
