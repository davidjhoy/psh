const next = require("next");
const express = require("express");
const mongoose = require("mongoose");
const { sendError } = require("next/dist/server/api-utils");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require("./db");

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  const cityEventsRouter = require("./routes/cityEvents");
  server.use("/cityEvents", cityEventsRouter);

  const coordEventsRouter = require("./routes/coordEvents");
  server.use("/coordEvents", coordEventsRouter);

  db.connectToDB();
  const connection = db.getConnection();

  server.get("/v1/events", (req, res) => {
    const collection = connection.db.collection("events");
    collection.find().toArray(function (erro, result) {
      if (erro) {
        res.status(400).send("Error Fetching!");
      } else {
        res.json(result);
      }
    });
    // res.end("Hello")
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
