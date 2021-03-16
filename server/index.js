const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const { MONGOURL } = require("./keys");

mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to db");
});

require("./models/user");
require("./models/post");
app.use(express.json());

app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(2000, () => {
  console.log("server is running on port 2000");
});
