import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import stockService from "../../services/stockService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const StockHistoryChart = ({ symbol }) => {
  const [historicalData, setHistoricalData] = useState([]);

  const getStockHistoryData = async (symbol) => {
    try {
      const response = await stockService.getStockHistory(symbol);
      setHistoricalData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (symbol) {
      getStockHistoryData(symbol);
    }
  }, [symbol]);

  const chartData = {
    labels: historicalData.map((data) => data.date), // dates de l'historique
    datasets: [
      {
        label: "Prix de l'action",
        data: historicalData.map((data) => data.price), // prix de l'action
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default StockHistoryChart;
