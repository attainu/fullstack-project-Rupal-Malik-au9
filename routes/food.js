const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Food = mongoose.model("food");
const Post = mongoose.model("Post");
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

router.post("/createfoodpost", requireLogin, (req, res) => {
  const { title, subTitle, photo, body } = req.body;
  //

  if (!title || !photo) {
    return res.status(422).json({ err: "All fields are mandatory" });
  }
  req.user.password = undefined;
  // const post = new Post({
  //   title,
  //   subTitle,
  //   photo,
  //   body,
  //   postedBy: req.user,
  // });
  const foodPost = new Food({
    title,
    subTitle,
    photo,
    body,
    postedBy: req.user,
  });
  post.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ post: result });
    }
  });
  foodPost.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ foodPost: result });
    }
  });
});

router.get("/food", requireLogin, (req, res) => {
  Food.find()
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

router.put("/likefood", requireLogin, (req, res) => {
  Food.findByIdAndUpdate(
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

router.put("/unlikefood", requireLogin, (req, res) => {
  Food.findByIdAndUpdate(
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

router.put("/commentfood", requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };

  Food.findByIdAndUpdate(
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

router.delete("/deletepostfood/:postId", requireLogin, (req, res) => {
  Food.findOne({ _id: req.params.postId })
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
  Food.findOne({ _id: req.params.commentId })
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
