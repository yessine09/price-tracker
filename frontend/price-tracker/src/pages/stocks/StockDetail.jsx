// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useParams } from "react-router-dom";
// import { StockOutlined, HomeOutlined } from "@ant-design/icons";
// import { Skeleton, Button } from "antd";
// import stockService from "../../services/stockService";

// const StockDetail = () => {
//   const { id } = useParams(); // Get the stockId from URL params
//   console.log(id);

//   const [detailStock, setDetailStock] = useState({});

//   const fetchStockDetail = async () => {
//     if (id) {
//       try {
//         const res = await stockService.getOneStock(id);
//         console.log("response stocccck", res);
//         setDetailStock(res.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchStockDetail();
//     } else {
//       console.log("No stock ID provided.");
//     }
//   }, [id]);

//   return (
//     <>
//       <div className="mt-4 p-3 border rounded shadow-lg text-center bg-white">
//         <h4
//           className=" mb-4 fw-bold text-bold text-start"
//           style={{ fontSize: "24px", letterSpacing: "1px" }}
//         >
//           Stock Detail
//         </h4>
//         <h4 className="fw-bold text-primary">
//           <StockOutlined className="me-2" />
//           {detailStock?.symbol}
//         </h4>
//         <p className="fs-4 fw-bold text-dark">
//           Price: ${detailStock?.currentPrice || "N/A"}
//         </p>
//         <p
//           className={`fs-5 fw-bold ${
//             detailStock?.percentageChange > 0 ? "text-success" : "text-danger"
//           }`}
//         >
//           Change: {detailStock?.percentageChange}%
//         </p>
//         <p
//           className="fs-6 text-muted"
//           style={{
//             fontSize: "14px",
//             color: "#4e4e4e",
//             backgroundColor: "#f4f4f4",
//             padding: "8px 12px",
//             borderRadius: "8px",
//             display: "inline-block",
//             marginTop: "10px",
//             fontStyle: "italic",
//           }}
//         >
//           Date: {new Date(detailStock?.date).toLocaleDateString()} at{" "}
//           {new Date(detailStock?.date).toLocaleTimeString()}
//         </p>

//       </div>
//         <Link to="/home">
//           <Button
//             type="primary"
//             icon={<HomeOutlined />}
//             className="mb-4"
//             size="large"
//           >
//             Back to Home
//           </Button>
//         </Link>
//     </>
//   );
// };

// export default StockDetail;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StockOutlined, HomeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import stockService from "../../services/stockService";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Enregistrement des composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const StockDetail = () => {
  const { id } = useParams();
  const [detailStock, setDetailStock] = useState({});
  const [historicalData, setHistoricalData] = useState([]);

  // Fonction pour récupérer les données de l'action
  const fetchStockDetail = async () => {
    if (id) {
      try {
        const res = await stockService.getOneStock(id);
        console.log("Réponse stock:", res);
        const stockData = res.data.data;

        setDetailStock(stockData);

        // Mise à jour des données historiques du graphique
        setHistoricalData((prev) => {
          const newData = [
            ...prev.slice(-19),
            {
              time: new Date(stockData.date).toLocaleTimeString(),
              price: stockData.currentPrice,
            },
          ];
          return newData;
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (id) {
      fetchStockDetail();
      const interval = setInterval(fetchStockDetail, 10000);
      return () => clearInterval(interval);
    }
  }, [id]);

  // Configuration des données du graphique
  const chartData = {
    labels: historicalData.map((data) => data.time),
    datasets: [
      {
        label: "Stock Price ($)",
        data: historicalData.map((data) => data.price),
        borderColor: "rgba(34, 202, 236, 1)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(34, 202, 236, 0.5)");
          gradient.addColorStop(1, "rgba(34, 202, 236, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.4, // Ajoute une courbe fluide
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { display: true },
      y: { display: true, beginAtZero: false },
    },
  };

  return (
    <>
      <div className="mt-4 p-3 border rounded shadow-lg text-center bg-white">
        <h4
          className="mb-4 fw-bold text-bold text-start"
          style={{ fontSize: "24px", letterSpacing: "1px" }}
        >
          Stock Detail
        </h4>
        <h4 className="fw-bold text-primary">
          <StockOutlined className="me-2" />
          {detailStock?.symbol}
        </h4>
        <p className="fs-4 fw-bold text-dark">
          Price: ${detailStock?.currentPrice || "N/A"}
        </p>
        <p
          className={`fs-5 fw-bold ${
            detailStock?.percentageChange > 0 ? "text-success" : "text-danger"
          }`}
        >
          Change: {detailStock?.percentageChange}%
        </p>
        <p
          className="fs-6 text-muted"
          style={{
            fontSize: "14px",
            color: "#4e4e4e",
            backgroundColor: "#f4f4f4",
            padding: "8px 12px",
            borderRadius: "8px",
            display: "inline-block",
            marginTop: "10px",
            fontStyle: "italic",
          }}
        >
          Date: {new Date(detailStock?.date).toLocaleDateString()} at{" "}
          {new Date(detailStock?.date).toLocaleTimeString()}
        </p>
      </div>

      {/* Graphique des prix */}
      <div className="mt-4 p-3 border rounded shadow-lg text-center bg-white">
        <h5 className="fw-bold">Stock Price Over Time</h5>
        <div style={{ height: "400px" }}>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      <Link to="/home">
        <Button
          type="primary"
          icon={<HomeOutlined />}
          className="mb-4"
          size="large"
        >
          Back to Home
        </Button>
      </Link>
    </>
  );
};

export default StockDetail;
