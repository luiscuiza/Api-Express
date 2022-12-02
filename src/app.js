import express from "express";
import clientsRoutes from "./routes/clients.routes.js";

const app = express();

app.use(express.json());
app.use("/api", clientsRoutes);

export default app;
