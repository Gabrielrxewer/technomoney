import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

interface StockData {
  date: string;
  date_utc: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adjclose: number;
}

type StockResponse = Record<string, StockData>;

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY!;
const API_URL =
  "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/history";
const SYMBOL = "AAPL";
const INTERVAL = "3mo";
const RANGE = "3mo";

export const getYahooFinanceData = async (): Promise<StockData[]> => {
  try {
    const response = await axios.get<StockResponse>(API_URL, {
      params: {
        symbol: SYMBOL,
        interval: INTERVAL,
        range: RANGE,
        diffandsplits: false,
      },
      headers: {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
      },
    });

    const data = response.data;

    return Object.values(data);
  } catch (error) {
    console.error("Erro na chamada dos dados da API:", error);
    return [];
  }
};
