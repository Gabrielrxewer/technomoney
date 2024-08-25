import { getLatestStockData } from "./webSocketService";

export const getAllStockData = (): any[] => {
  const stockData = getLatestStockData();
  const symbols = Object.keys(stockData);

  if (symbols.length === 0) {
    console.log("No data available.");
    return [];
  }

  return symbols.map((symbol) => ({
    ticker: symbol,
    price: stockData[symbol].price,
    volume: stockData[symbol].volume,
    change:
      ((stockData[symbol].price - stockData[symbol].previousPrice) /
        stockData[symbol].previousPrice) *
      100,
  }));
};
