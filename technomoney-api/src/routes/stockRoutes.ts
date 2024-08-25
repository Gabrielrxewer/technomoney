import express from "express";
import { getAllStockData } from "../services/stockService";
import {
  subscribeToSymbol,
  unsubscribeFromSymbol,
} from "../services/webSocketService";

const router = express.Router();

router.get("/", (req, res) => {
  const stockData = getAllStockData();
  res.json(stockData);
});

router.post("/subscribe", (req, res) => {
  const { symbol } = req.body;
  subscribeToSymbol(symbol);
  res.send(`Subscribed to ${symbol}`);
});

router.post("/unsubscribe", (req, res) => {
  const { symbol } = req.body;
  unsubscribeFromSymbol(symbol);
  res.send(`Unsubscribed from ${symbol}`);
});

export default router;
