const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.set("port", process.env.PORT || 3000);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port : " + app.get("port"));
});
