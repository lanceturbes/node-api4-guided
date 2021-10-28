require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Web 47 rocks!</h1>
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// eslint-disable-next-line
function cohortRocks() {
  console.log("arguments", process.argv.slice(2));
  console.log(`web ${process.argv[2]} rocks!`);
}
function cohortRocksEnv() {
  console.log(`My home folder is "${process.env.HOME}"`);
  console.log(`My shell is "${process.env.SHELL}"`);
  console.log(`In my environment, FOO is "${process.env.FOO}"`);
}
cohortRocksEnv();
