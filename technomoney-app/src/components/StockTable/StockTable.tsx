import React, { useState, useEffect } from "react";
import "./StockTable.css";
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any[]>(
          "http://localhost:5001/api/stocks"
        );
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

  // Lógica de paginação
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="table-container">
      <table className="stock-table">
        <thead>
          <tr>
            <th>Open</th>
            <th>Low</th>
            <th>High</th>
            <th>Close</th>
            <th>Adj Close</th>
            <th>Volume</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((item, index) => (
            <tr key={index}>
              <td>{item.open}</td>
              <td>{item.low}</td>
              <td>{item.high}</td>
              <td>{item.close}</td>
              <td>{item.adjclose}</td>
              <td>{item.volume}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StockTable;
