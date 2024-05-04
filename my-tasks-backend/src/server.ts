// Imports
import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
const app = express();
const port: number = 8080;

// CORS
// Specify which url can access the API
const corsOptions: CorsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Parse application/json
app.use(express.json());

// Routers Modules
import taskRouter from "./router/taskRouter.js";

app.get("/api/ping", (_req: Request, res: Response) => {
  res.send("🏓 Pong!");
});

// Tasks Router
app.use("/api/tasks", taskRouter);

// Handling all bad addresses
app.get("*", (req: Request, res: Response) =>
  res.status(404).send("Page No Found")
);

app.listen(port, () => {
  console.log(`🌐 App started http://localhost:${port}/api/ping`);
});
