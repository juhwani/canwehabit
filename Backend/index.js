const express = require("express");
const accountlib = require("./lib/account");

const app = express();
const config = require("./config");
app.use(express.json());

app.use(require("./NewGoal/router"))
//If users joins the challenge, they put their money into their point account


//Read the current account balance



app.listen(config.express.port, () => {
  console.log("Server is running at port 3001");
});