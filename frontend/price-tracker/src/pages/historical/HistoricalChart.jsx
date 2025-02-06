import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import stockService from "../../services/stockService";
import "./historicalPrice.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HistoricalChart = ({ symbol }) => {
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHistoricalList = async () => {
      setLoading(true);
      try {
        const response = await stockService.getHistoricalData(symbol);
        console.log("historiqueee", response);

        setHistoricalData(response.data);
        setError(null);
      } catch (err) {
        setError("An error occurred while fetching historical data.");
        setHistoricalData([]);
      } finally {
        setLoading(false);
      }
    };

    if (symbol) {
      getHistoricalList();
    }
  }, [symbol]);

  const chartData = {
    labels: historicalData.map((item) =>
      new Date(item.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Open Price",
        data: historicalData.map((item) => item.open),
        borderColor: "#4b8df8",
        backgroundColor: "rgba(75, 141, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Close Price",
        data: historicalData.map((item) => item.close),
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "High Price",
        data: historicalData.map((item) => item.high),
        borderColor: "#dc3545",
        backgroundColor: "rgba(220, 53, 69, 0.2)",
        fill: false,
      },
      {
        label: "Low Price",
        data: historicalData.map((item) => item.low),
        borderColor: "#fd7e14",
        backgroundColor: "rgba(253, 126, 20, 0.2)",
        fill: false,
      },
      {
        label: "Volume",
        data: historicalData.map((item) => item.volume),
        borderColor: "#ff6f61",
        backgroundColor: "rgba(255, 111, 97, 0.2)",
        type: "bar",
        yAxisID: "y1",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            if (context.dataset.type === "bar") {
              const volume = context.raw;
              return `${volume.toLocaleString()} shares`;
            }
            const price = context.raw;
            return `$${price.toFixed(2)}`;
          },
        },
        intersect: false,
        mode: "index",
        position: "nearest",
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        type: "category",
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 7,
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          callback: function (value) {
            return `$${value.toFixed(2)}`;
          },
        },
      },
      y1: {
        position: "right",
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          callback: function (value) {
            return `${value.toLocaleString()} shares`;
          },
        },
      },
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "xy",
        speed: 10,
      },
      zoom: {
        enabled: true,
        mode: "xy",
        speed: 0.1,
      },
    },
  };

  return (
    <div className="chart-container">
      {loading && <p>Loading historical data...</p>}
      {error && <p>{error}</p>}
      {historicalData.length > 0 && (
        <div className="chart-content">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default HistoricalChart;
