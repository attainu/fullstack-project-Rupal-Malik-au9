const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodb = require("mongodb");
const session = require("express-session");

var userprofile;
const url =
  "mongodb+srv://rupal:piyush88@cluster0.77bw0.mongodb.net/live_twice?retryWrites=true&w=majority";
const port = process.env.PORT || 3000;
let app = express();
app.use(cors());
let db;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "mysessionid",
  })
);

var mongoClient = new mongodb.MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoClient.connect((err) => {
  if (err) throw err;
  db = mongoClient.db("live_twice");
});

app.get("/health", (req, res) => {
  res.send("Health Ok");
});

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

app.post("/addtravel", (req, res) => {
  db.collection("travelData").insertMany(req.body, (err, postdata) => {
    if (err) throw err;
    else {
      res.status(200).send("data added");
    }
  });
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
app.get("/travel", (req, res) => {
  db.collection("travelData")
    .find()
    .toArray((err, postdata) => {
      if (err) throw err;
      else {
        res.send(postdata);
      }
    });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is running on https://localhost:${port}`);
});
