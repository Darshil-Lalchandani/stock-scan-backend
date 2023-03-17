const express = require("express");
const logger = require("morgan");
const { getAllRecords } = require("./db");
const app = express();

app.use(logger("dev"));

app.get("/data", (req, res) => {
  getAllRecords()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = app;
