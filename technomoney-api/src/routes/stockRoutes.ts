import express from "express";
import { getYahooFinanceData } from "../services/stockService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const stockData = await getYahooFinanceData();
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

export default router;
