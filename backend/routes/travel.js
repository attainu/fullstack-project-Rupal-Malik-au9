const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TravelData = mongoose.model("TravelData");
const requireLogin = require("../middlewares/requireLogin");

router.get("/travel", (req, res) => {
  TravelData.find()

    .then((posts) => {
      if (!posts) {
        res.json({ err: "No data" });
      } else {
        res.json({ posts });
      }
    })
    .catch((err) => console.log(err));
});

// router.post("/createtravelpost", (req, res) => {
//   const { title, subTitle, photo, body } = req.body;
//   //

//   if (!title || !photo) {
//     return res.status(422).json({ err: "All fields are mandatory" });
//   }

//   const post = new TravelData({
//     title,
//     subTitle,
//     photo,
//     body,
//   });
//   post.save((err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json({ post: result });
//     }
//   });
// });

module.exports = router;
