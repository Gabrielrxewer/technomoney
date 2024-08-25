import WebSocket from "ws";

const token = "cr5abp1r01qrns9mr4t0cr5abp1r01qrns9mr4tg";
const socket = new WebSocket(`wss://ws.finnhub.io?token=${token.trim()}`);

let latestStockData: { [key: string]: any } = {};

export const subscribeToSymbol = (symbol: string) => {
  socket.send(JSON.stringify({ type: "subscribe", symbol: symbol }));
};

export const unsubscribeFromSymbol = (symbol: string) => {
  socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
};

socket.on("open", () => {
  console.log("Connected to Finnhub WebSocket");
  subscribeToSymbol("AAPL");
  subscribeToSymbol("BINANCE:BTCUSDT");
  subscribeToSymbol("IC MARKETS:1");
});

socket.on("message", (data) => {
  const parsedData = JSON.parse(data.toString());
  console.log("Message from server: ", parsedData);

  if (parsedData.data) {
    parsedData.data.forEach((stock: any) => {
      latestStockData[stock.s] = {
        price: stock.p,
        volume: stock.v,
        timestamp: stock.t,
      };
    });
    console.log("Updated stock data:", latestStockData);
  }
});

export const getLatestStockData = () => {
  return latestStockData;
};
