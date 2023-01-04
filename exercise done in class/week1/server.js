const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});


// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", function (req, res) {
    res.send("Hello world Yay node!");
  });

//   changing the end of the http

app.get("/node", function (req, res) {
    res.send("Yay node!");
  });

//   changing the end

app.get("/codeyourfuture", function (req, res) {
    res.send("Welcome to code your future!");
  });

// search query

app.get("/", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
  });

// function reation in node

app.get("/json", function (req, res) {
    let lat = req.query.lat;
    let lng = req.query.lng;
    res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
  });