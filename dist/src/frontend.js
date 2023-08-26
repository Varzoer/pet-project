const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

const CLIENT_PORT = process.env.CLIENT_PORT;
const SERVER_PORT = process.env.SERVER_PORT;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../public/index.html");
});

app.get("/products", (req, res) => {
  axios
    .get(`http://localhost:${SERVER_PORT}/products`)
    .then((response) => {
      const items = response.data;
      const formattedItems = items.map((item) => `${item.name} ${item.price}`);
      const formattedResponse = formattedItems.join("<br>");

      res.send(`Client App - Response from Server:<br>${formattedResponse}`);
      res.sendStatus(200);
      res.end();
    })
    .catch((error) => {
      res.send(`Client App - Error:<br>${error.message}`);
      res.status(500);
      res.end();
    });
});

module.exports = {
  app,
  CLIENT_PORT,
  SERVER_PORT,
};
