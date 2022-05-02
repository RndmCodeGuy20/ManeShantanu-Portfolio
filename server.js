const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/thankyou", function (req, res) {
  res.sendFile(__dirname + "/thankyou.html");
});

app.post("/thankyou", function (req, res) {
  console.log(req.body);
  res.send("Thank you");
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
