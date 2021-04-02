const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Travel = mongoose.model("travel");
const requireLogin = require("../middlewares/requireLogin");

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });
// const upload = multer({ storage });

router.get("/travel", requireLogin, (req, res) => {
  Travel.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    // .populate("comments.postedBy", "_id name")
    .then((posts) => {
      if (!posts) {
        console.log(err);
      } else {
        res.json({ posts });
      }
    });
});

router.put("/liketravel", requireLogin, (req, res) => {
  Travel.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ err });
      } else {
        res.json(result);
      }
    });
});

router.put("/unliketravel", requireLogin, (req, res) => {
  Travel.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user._id },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ err });
      } else {
        res.json(result);
      }
    });
});

router.put("/commenttravel", requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };

  Travel.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ err });
      } else {
        res.json(result);
      }
    });
});

router.delete("/deleteposttravel/:postId", requireLogin, (req, res) => {
  Travel.findOne({ _id: req.params.postId })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ err });
      }
      if (post) {
        if (post.postedBy._id.toString() === req.user._id.toString()) {
          post
            .remove()
            .then((result) => {
              res.json(result);
            })
            .catch((err) => console.log(err));
        }
      }
    });
});

router.delete("/deletecomment/:commentId", requireLogin, (req, res) => {
  Travel.findOne({ _id: req.params.commentId })
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({ err });
      }
      if (post) {
        if (post.postedBy._id.toString() === req.user._id.toString()) {
          post
            .remove()
            .then((result) => {
              res.json(result);
            })
            .catch((err) => console.log(err));
        }
      }
    });
});

module.exports = router;
