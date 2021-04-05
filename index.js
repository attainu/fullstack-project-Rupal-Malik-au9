const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 2000;
app.use(express.json());
app.use(cors());
const { MONGOURI } = require("./config/keys");

//connect to mongo
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

//use routes
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/travel"));
app.use(require("./routes/sport"));
app.use(require("./routes/food"));
app.use(require("./routes/user"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  // });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
