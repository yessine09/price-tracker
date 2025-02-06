import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StockOutlined, HomeOutlined } from "@ant-design/icons";
import { Button, Card, Alert } from "antd";
import stockService from "../../services/stockService";
import Footer from "../../layouts/Footer";
import NavBar from "../../layouts/NavBar";
import HistoricalChart from "../historical/HistoricalChart";

const StockDetail = () => {
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [detailStock, setDetailStock] = useState({});
  const [historicalData, setHistoricalData] = useState([]);

  const fetchStockDetail = async () => {
    if (id) {
      try {
        const res = await stockService.getOneStock(id);
        console.log("Réponse stock:", res);
        const stockData = res.data.data;

        setDetailStock(stockData);

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

  return (
    <>
      <NavBar />

      <section className="pb-5 bg-light mt-5 d-flex justify-content-center">
        <div className="container">
          <Card className="shadow-lg p-4 bg-white rounded text-center ">
            <h1 className="mb-4 stock-title" style={{ color: "#2E3A59" }}>
              Stock Detail
            </h1>
            {error && <Alert message={error} type="error" showIcon />}

            <div className="mb-4">
              <h4 className="fw-bold text-primary">
                <StockOutlined className="me-2" />
                {detailStock?.symbol}
              </h4>
              <p className="fs-4 fw-bold text-dark stock-price">
                Price: ${detailStock?.currentPrice || "N/A"}
              </p>
              <p
                className={`fs-5 fw-bold ${
                  detailStock?.percentageChange > 0
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                Change: {detailStock?.percentageChange}%
              </p>
              <p
                className="fs-6 text-muted bg-light p-2 rounded"
                style={{ display: "inline-block", fontStyle: "italic" }}
              >
                Date: {new Date(detailStock?.date).toLocaleDateString()} at{" "}
                {new Date(detailStock?.date).toLocaleTimeString()}
              </p>
            </div>

            {/* Chart Box */}
            <Card className="shadow-sm p-3 rounded bg-light chart-card">
              <div className="">
                <HistoricalChart symbol={detailStock?.symbol} />
              </div>
            </Card>
            <div className="">
              <Link to="/home">
                <Button
                  type="primary"
                  icon={<HomeOutlined />}
                  className="mt-4 responsive-btn"
                  size="large"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default StockDetail;
