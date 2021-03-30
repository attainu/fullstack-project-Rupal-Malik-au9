const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 2000;
app.use(express.json());
app.use(cors());
const { MONGOURI } = require("./config/keys");

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
require("./models/sport");
require("./models/food");
// mongoose.model("User");

app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/travel"));
app.use(require("./routes/sport"));
app.use(require("./routes/food"));
app.use(require("./routes/user"));
// app.get("/food", (req, res) => {
//   db.collection("foods")
//     .find()
//     .toArray((err, postdata) => {
//       if (err) throw err;
//       else {
//         res.send(postdata);
//       }
//     });
// });

// app.get("/travel", (req, res) => {
//   db.collection("travels")
//     .find()
//     .toArray((err, postdata) => {
//       if (err) throw err;
//       else {
//         res.send(postdata);
//       }
//     });
// });
// app.get("/allposts", (req, res) => {
//   db.collection("posts")
//     .find()
//     .toArray((err, postdata) => {
//       if (err) throw err;
//       else {
//         res.send(postdata);
//       }
//     });
// });

// app.get("/sports", (req, res) => {
//   db.collection("sports")
//     .find()
//     .toArray((err, postdata) => {
//       if (err) throw err;
//       else {
//         res.send(postdata);
//       }
//     });
// });
if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontEnd/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontEnd", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
