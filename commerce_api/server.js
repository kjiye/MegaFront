const cors = require("cors")();
const express = require("express");
const http = require("http");
const router = require("./router");

const app = express();

app.use(cors);
app.use(express.urlencoded({ limit: 50000, extended: true }));
app.use(express.json({ limit: 50000 }));

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Methods", ["GET,PUT,POST,DELETE"]);
  res.header("Access-Control-Allow-Headers", ["Content-Type"]);
  next();
});

router(app);
const httpServer = http.createServer(app);
httpServer.listen(8080);

console.log("sample product server on!!");
