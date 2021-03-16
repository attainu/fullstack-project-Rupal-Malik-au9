const jwt = require("jsonwebtoken");
const { JWT_SEC } = require("../keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ err: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SEC, (err, payload) => {
    if (err) {
      return res.status(401).json({ err: "you must be logged in", payload });
    }

    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};

//authorization === bearer sadasdasadasd
