const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
  imageurl: {
    type: String,
    required: true,
  },
  videourl: {
    type: String,
  },

  story: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
  },

  likes: {
    type: Number,
  },
  userName: {
    type: String,
  },
  contact: {
    type: String,
  },
});

mongoose.model("Food", FoodSchema, "food");
