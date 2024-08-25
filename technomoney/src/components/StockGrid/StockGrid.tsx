import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StockGrid.css";

interface Stock {
  ticker: string;
  price: number | null;
  volume: number | null;
  change: number | null;
}

const StockGrid: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/stocks");
        console.log("Response data:", response.data);
        setStocks(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do servidor:", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="stock-grid-container">
      <h1>Market Overview</h1>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Price</th>
            <th>Change (%)</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.length === 0 ? (
            <tr>
              <td colSpan={4}>No data available</td>
            </tr>
          ) : (
            stocks.map((stock, index) => (
              <tr key={index}>
                <td>{stock.ticker}</td>
                <td>
                  {stock.price !== null ? `$${stock.price.toFixed(2)}` : "N/A"}
                </td>
                <td
                  style={{
                    color:
                      stock.change !== null && stock.change >= 0
                        ? "green"
                        : "red",
                  }}
                >
                  {stock.change !== null
                    ? `${stock.change.toFixed(2)}%`
                    : "N/A"}
                </td>
                <td>
                  {stock.volume !== null
                    ? stock.volume.toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockGrid;
