const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 2000;
app.use(express.json());
app.use(cors());
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("connected", () => console.log("Connected to Mongo"));
db.on("error", () => console.log("error"));

require("./models/user");
require("./models/post");
require("./models/travel");
// mongoose.model("User");

app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/post"));
app.get("/food", (req, res) => {
  db.collection("eat")
    .find()
    .toArray((err, postdata) => {
      if (err) throw err;
      else {
        res.send(postdata);
      }
    });
});

app.get('/travel', (req, res) => {
  db.collection('travels').find().toArray((err, postdata) => {
      if (err) throw err;
      else {
          res.send(postdata)
      }

  })
});
app.get('/allposts', (req, res) => {
  db.collection('posts').find().toArray((err, postdata) => {
      if (err) throw err;
      else {
          res.send(postdata)
      }

  })
});


app.get("/sports", (req, res) => {
  db.collection("sportsData")
    .find()
    .toArray((err, postdata) => {
      if (err) throw err;
      else {
        res.send(postdata);
      }
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
