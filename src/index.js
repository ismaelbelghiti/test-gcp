import _ from "underscore";
import axios from "axios";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config";

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
    // origin: '*',
    exposedHeaders: ["Authorization"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(bodyParser.json({ limit: "1000mb" }));

app.get("/alpha", async (req, res) => {
  res.json({ alpha: 42 });
});

app.listen(config.get("listen"), () => {
  console.info(`-- Listening on ${config.get("listen")}`);
});
