const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://RndmCodeGuy20:Iop3nE9K0Sxh2kmD@cluster0.dhqnu.mongodb.net/MessageDB",
  {
    useNewUrlParser: true,
  }
);

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User email ID required"],
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email ID!`,
    },
    required: [true, "User email ID required"],
  },
  project: String,
  message: String,
});

const Person = mongoose.model("Person", personSchema);

const app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/thankyou", function (req, res) {
  res.sendFile(__dirname + "/thankyou.html");
});

app.get("/warning", function (req, res) {
  res.sendFile(__dirname + "/warning.html");
});

app.post("/thankyou", function (req, res) {
  const person = new Person({
    name: req.body.Name,
    email: req.body.email,
    project: req.body.project,
    message: req.body.msg,
  });

  person.save(function (err) {
    if (err) {
      res.sendFile(__dirname + "/warning.html");
    } else {
      res.sendFile(__dirname + "/thankyou.html");
    }
  });
});

// console.log(__dirname + "/Countdown Timer/index.html");

// app.get("/Countdown%20Timer/", function (req, res) {
//   res.sendFile(__dirname + "/Countdown Timer/index.html");
//   console.log(__dirname + "/Countdown Timer/index.html");
// });

app.set("port", process.env.PORT || 3000);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on http://127.0.0.1:3000");
});
