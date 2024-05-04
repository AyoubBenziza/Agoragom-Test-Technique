import express from "express";
import cors from "cors";
const app = express();
const port = 8080;
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
import taskRouter from "./router/taskRouter.js";
app.get("/api/ping", (_req, res) => {
    res.send("🏓 Pong!");
});
app.use("/api/tasks", taskRouter);
app.get("*", (req, res) => res.status(404).send("Page No Found"));
app.listen(port, () => {
    console.log(`🌐 App started http://localhost:${port}/api/ping`);
});
