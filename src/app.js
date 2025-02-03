const express = require("express");
const cors = require("cors");
const classifyNumber = require("./helpers/classifyNumber");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/classify-number", classifyNumber);

module.exports = app;
