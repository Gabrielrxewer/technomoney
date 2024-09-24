import React, { useState, useEffect } from "react";
import "./StockTable.css";
import axios from "axios";
import { Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

interface StockData {
  key: number;
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
        const response = await axios.get<any[]>(
          "http://localhost:5001/api/stocks"
        );
        const stockData = response.data;

        const formattedData = Object.keys(stockData[1]).map((key, index) => {
          const entry = stockData[1][key];
          return {
            key: index,
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

  const columns = [
    {
      title: 'Open',
      dataIndex: 'open',
      key: 'open',
    },
    {
      title: 'Low',
      dataIndex: 'low',
      key: 'low',
    },
    {
      title: 'High',
      dataIndex: 'high',
      key: 'high',
    },
    {
      title: 'Close',
      dataIndex: 'close',
      key: 'close',
      render: (_: any, record: StockData) => {
        if (record.close > record.open) {
          return (
            <>
              <ArrowUpOutlined style={{ color: 'green' }} /> {record.close}
            </>
          );
        } else if (record.close < record.open) {
          return (
            <>
              <ArrowDownOutlined style={{ color: 'red' }} /> {record.close}
            </>
          );
        } else {
          return record.close;
        }
      },
    },
    {
      title: 'Adj Close',
      dataIndex: 'adjclose',
      key: 'adjclose',
      render: (_: any, record: StockData) => {
        if (record.adjclose > record.open) {
          return (
            <>
              <ArrowUpOutlined style={{ color: 'green' }} /> {record.adjclose}
            </>
          );
        } else if (record.adjclose < record.open) {
          return (
            <>
              <ArrowDownOutlined style={{ color: 'red' }} /> {record.adjclose}
            </>
          );
        } else {
          return record.adjclose;
        }
      },
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
      key: 'volume',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <div className="table-container">
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 10 }} />
    </div>
  );
};

export default StockTable;
