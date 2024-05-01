// Imports
const express = require("express");
const app = express();
const port = 8080;

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Parse application/json
app.use(express.json());

// Routers Modules
const taskRouter = require("./router/taskRouter");

app.get("/api/ping", (_req, res) => {
  res.send("🏓 Pong!");
});

// Tasks Router
app.use("/api/tasks", taskRouter);

// Handling all bad addresses
app.get("*", (req, res) => res.status(404).send("Page No Found"));

app.listen(port, () => {
  console.log(`🌐 App started http://localhost:${port}/api/ping`);
});
