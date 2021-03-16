const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const requireLogin = require("../middlewares/requireLogin");

router.post("/createpost", requireLogin, (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(404).json({ error: "Please add all the fields" });
  }
  req.user.password = undefined;
  //const posts = new Post();
  const post = new Post({
    title,
    body,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/allpost", requireLogin, (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")

    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/ownpost", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((mypost) => {
      res.json({ mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
