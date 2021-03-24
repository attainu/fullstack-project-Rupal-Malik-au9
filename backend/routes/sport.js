const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const SportsData = mongoose.model("SportsData");
const requireLogin = require("../middlewares/requireLogin");

router.get("/travel", (req, res) => {
  SportsData.find()

    .then((posts) => {
      if (!posts) {
        res.json({ err: "No data" });
      } else {
        res.json({ posts });
      }
    })
    .catch((err) => console.log(err));
});
