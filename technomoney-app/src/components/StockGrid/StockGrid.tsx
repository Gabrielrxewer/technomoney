import React, { useState, useEffect } from "react";
import './StockGrid.css';
import axios from "axios";

interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adjclose: number;
}

const StockTable: React.FC = () => {
  const [data, setData] = useState<StockData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any[]>("http://localhost:5001/api/stocks");
        const stockData = response.data;

        const formattedData = Object.keys(stockData[1]).map((key) => {
          const entry = stockData[1][key];
          return {
            date: entry.date,
            open: entry.open,
            high: entry.high,
            low: entry.low,
            close: entry.close,
            volume: entry.volume,
            adjclose: entry.adjclose,
          };
        });

        setData(formattedData);
      } catch (error) {
        console.error("Nenhum dado foi retornado pela API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
          <th>Adj Close</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.open}</td>
            <td>{item.high}</td>
            <td>{item.low}</td>
            <td>{item.close}</td>
            <td>{item.volume}</td>
            <td>{item.adjclose}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
