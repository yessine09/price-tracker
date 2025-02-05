import React, { useEffect, useState } from "react";
import stockService from "../../services/stockService";
import { Input, Button, Alert } from "antd";
import { SearchOutlined, StockOutlined } from "@ant-design/icons";

const ScrapStock = () => {
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await stockService.getStockPrice(symbol);
      console.log(response);

      if (response.data) {
        setStockData(response.data);
        setError(null);
      } else {
        setStockData(null);
        setError("Stock not found or invalid symbol.");
      }
    } catch (error) {
      setStockData(null);
      setError("An error occurred while fetching stock data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row gy-3 gy-md-4">
          <div className="">
            <div className="card widget-card border-light shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                  <div className="card shadow-lg p-4">
                    <h4
                      className="text-center mb-4 fw-bold text-bold"
                      style={{ fontSize: "24px", letterSpacing: "1px" }}
                    >
                      Scrap Data from Yahoo (e.g. AAPL, TSLA)
                    </h4>
                    <div className="d-flex gap-2">
                      <Input
                        placeholder="Enter stock symbol (e.g. AAPL)"
                        value={symbol}
                        onChange={(e) =>
                          setSymbol(e.target.value.toUpperCase())
                        }
                        onPressEnter={handleSearch}
                        className="flex-grow-1"
                      />
                      <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        onClick={handleSearch}
                        loading={loading}
                      >
                        Search
                      </Button>
                    </div>
                    {error && (
                      <Alert
                        message={error}
                        type="error"
                        showIcon
                        className="mt-3"
                      />
                    )}

                    {stockData && (
                      <div className="mt-4 p-3 border rounded shadow-lg text-center bg-white">
                        <h4 className="fw-bold text-primary">
                          <StockOutlined className="me-2" />
                          {stockData.symbol}
                        </h4>
                        <p className="fs-4 fw-bold text-dark">
                          Price: ${stockData.currentPrice}
                        </p>
                        <p
                          className={`fs-5 fw-bold ${
                            stockData.change > 0
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          Change: {stockData.percentageChange}%
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
                          Date: {new Date(stockData.date).toLocaleDateString()}{" "}
                          at the hour{" "}
                          {new Date(stockData.date).toLocaleTimeString()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div id="bsb-chart-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrapStock;
