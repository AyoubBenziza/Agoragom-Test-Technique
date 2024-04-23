const express = require("express");
const app = express();
const port = 8080;

app.get("/api/ping", (_req, res) => {
  res.send("🏓 Pong!");
});

app.listen(port, () => {
  console.log(`🌐 App started http://localhost:${port}/api/ping`);
});
