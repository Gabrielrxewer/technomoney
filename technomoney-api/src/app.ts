import express from "express";
import stockRoutes from "./routes/stockRoutes";
import { getYahooFinanceData } from "./services/stockService";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stockRoutes);

const startApp = async () => {
  console.log("Starting app...");
  try {
    await getYahooFinanceData();
    console.log("API Retornou os dados com sucesso!");
  } catch (error) {
    console.error("Erro ao retornar os dados da API:", error);
  }
};

startApp();

export default app;
