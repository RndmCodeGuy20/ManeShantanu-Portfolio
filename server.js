const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const sqlite3 = require("sqlite3");
const fs = require("fs");

const app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));

var data = fs.readFileSync("./database/data.json");
var jsonObj = JSON.parse(data);

// var db = new sqlite3.Database("./database/contactInfo.db");
// db.run(
//   "CREATE TABLE IF NOT EXISTS cont(name TEXT, email TEXT, project TEXT, msg TEXT)"
// );

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/thankyou", function (req, res) {
  res.sendFile(__dirname + "/thankyou.html");
});

app.post("/thankyou", function (req, res) {
  // console.log(req.body);
  // db.serialize(() => {
  //   db.run(
  //     "INSERT INTO cont(name, email, project, msg) VALUES(?, ?, ?, ?)",
  //     [req.body.name, req.body.email, req.body.project, req.body.msg],
  //     function (err) {
  //       if (err) {
  //         return console.log(err.message);
  //       }

  //       console.log("Contact information has been added");
  //       res.send("Name : " + req.body.name + "Email : " + req.body.email);
  //     }
  //   );
  // });

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
