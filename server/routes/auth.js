const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SEC } = require("../keys");
const requireLogin = require("../middlewares/requireLogin");

router.post("/signup", (req, res) => {
  const { name, email, password, confirmedPass } = req.body;
  console.log(name, email, password, confirmedPass);
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  if (password !== confirmedPass) {
    return res.status(422).json({ error: "Enter same password" });
  }

  User.findOne({ email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "User already exists with that email" });
      }
      bcrypt.hash(password, 10).then((hashedPass) => {
        const user = new User({
          email,
          password: hashedPass,
          name,
        });

        user
          .save() //insertOne()
          .then((user) => {
            res.json({ message: "Saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })

    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are mandotory" });
  }
  User.findOne({ email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "User Not Found" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((matched) => {
        if (matched) {
          //res.json({ message: "Successfully signed in" });
          const token = jwt.sign({ _id: savedUser._id }, JWT_SEC);
          res.json({ token });
        } else {
          res.status(422).json({ error: "Invalid UserName or Password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
