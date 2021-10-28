require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Web ${process.env.COHORT} rocks!</h1>
  `);
});

app.get("/port", (req, res) => {
  res.send(`<p>Port is ${PORT}</p>`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
