import express from "express";
import stockRoutes from "./routes/stockRoutes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stockRoutes);

export default app;
