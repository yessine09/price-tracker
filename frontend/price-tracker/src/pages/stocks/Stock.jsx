import React, { useEffect, useState } from "react";
import stockService from "../../services/stockService";
import { Input, Button, Alert, AutoComplete } from "antd";
import {
  SearchOutlined,
  StockOutlined,
  HeartOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import HistoricalPrice from "../historical/HistoricalPrice";

const Stock = () => {
  const [symbolSearch, setSymbolSearch] = useState("");
  const [stockDataSearch, setStockDataSearch] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [symbolH, setSymbolH] = useState("AAPL");

  const auth = useSelector((state) => state.user?.currentUser);
  const userId = auth?.user?._id;

  const stockSymbols = ["AAPL", "TSLA", "GOOGL", "AMZN", "MSFT"];

  // Filter symbols based on the user's input
  const filteredSymbols = stockSymbols.filter((symbol) =>
    symbol.toUpperCase().startsWith(symbolSearch.toUpperCase())
  );

  const handleSearchStock = async () => {
    if (!symbolSearch) {
      setError("Stock symbol is required.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await stockService.searchStock(symbolSearch);

      if (response.data) {
        setStockDataSearch(response.data); // Assuming the response contains the stock data

        console.log("data searched", stockDataSearch);
      } else {
        setError("Stock symbol not found. Please try again.");
      }
    } catch (err) {
      setError("Failed to fetch stock data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Add stock to watchlist (stored in localStorage)
  const handleAddToWatchlist = async (symbol) => {
    if (!userId) {
      Swal.fire({
        icon: "warning",
        title: "You must be logged in to add to watchlist.",
        confirmButtonText: "Ok",
      });
      return;
    }

    try {
      // Fetch the stock data based on the symbol
      const stockResponse = await stockService.searchStock(symbol);
      const stockData = stockResponse?.data;

      if (!stockData || !stockData._id) {
        Swal.fire({
          icon: "error",
          title: "No stock found to add.",
          confirmButtonText: "Ok",
        });
        return;
      }

      // Check if the stock already exists in the watchlist
      const existingStockIndex = watchlist.findIndex(
        (stock) => stock.symbol === stockData.symbol
      );

      if (existingStockIndex !== -1) {
        // Stock exists in the watchlist
        const existingStock = watchlist[existingStockIndex];

        if (existingStock._id === stockData._id) {
          // Stock with the same ID already exists, no update needed
          Swal.fire({
            icon: "info",
            title: `${stockData.symbol} is already in your watchlist.`,
            confirmButtonText: "Ok",
          });
          return;
        } else {
          // Stock exists but with a different ID, replace the old one
          const updatedWatchlist = [...watchlist];
          updatedWatchlist[existingStockIndex] = stockData;
          setWatchlist(updatedWatchlist);
          localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

          // Call the API to update the watchlist
          await stockService.addToWatchlist(userId, stockData._id);

          Swal.fire({
            icon: "success",
            title: `${stockData.symbol} has been updated in your watchlist!`,
            confirmButtonText: "Great!",
          });
        }
      } else {
        // Stock does not exist in the watchlist, add it
        const updatedWatchlist = [...watchlist, stockData];
        setWatchlist(updatedWatchlist);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

        // Call the API to add the stock to the watchlist
        await stockService.addToWatchlist(userId, stockData._id);

        Swal.fire({
          icon: "success",
          title: `${stockData.symbol} added to watchlist!`,
          confirmButtonText: "Great!",
        });
      }
    } catch (error) {
      console.error("Failed to add to watchlist", error);
      Swal.fire({
        icon: "error",
        title: "Failed to add to watchlist.",
        confirmButtonText: "Ok",
      });
    }
  };
  // Sumbit button for change historical Data & get Stock Detail
  const handleButtonClick = () => {
    setSymbolH(symbolSearch);
    handleSearchStock(symbolSearch);
    handleSearchStock();
  };

  return (
    <div>
      <div className="container">
        <div className="row gy-3 gy-md-4">
          {/* hisorical Data*/}
          <div className="col-12 col-lg-6 col-xl-5">
            <HistoricalPrice symbol={symbolH} />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="card widget-card border-light shadow-sm h-100">
              <div className="card shadow-lg p-4">
                <h4
                  className=" mb-4 fw-bold text-bold"
                  style={{ fontSize: "24px", letterSpacing: "1px" }}
                >
                  Stock Search
                </h4>
                <div className="d-flex gap-2">
                  <AutoComplete
                    value={symbolSearch}
                    onChange={setSymbolSearch}
                    onSelect={(symbol) => {
                      setSymbolSearch(symbol);
                    }}
                    options={filteredSymbols.map((symbol) => ({
                      value: symbol,
                    }))}
                    style={{ flexGrow: 1 }}
                  >
                    <Input
                      placeholder="Enter stock symbol (e.g. AAPL)"
                      onPressEnter={handleSearchStock}
                    />
                  </AutoComplete>
                  <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    onClick={handleButtonClick}
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

                {/* Link to the Watchlist page */}
                <div className="mt-4">
                  <Link to="/watchlist">
                    <Button
                      type="link"
                      icon={<LinkOutlined />}
                      style={{
                        color: "#239023",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      View Watchlist
                    </Button>
                  </Link>
                </div>
                {stockDataSearch && (
                  <div className="mt-4 p-3 border rounded shadow-lg text-center bg-white">
                    <h4 className="fw-bold text-primary">
                      <StockOutlined className="me-2" />
                      <Link to={`/stock/${stockDataSearch?._id}`}>
                        {stockDataSearch?.symbol}
                      </Link>
                    </h4>
                    <p className="fs-4 fw-bold text-dark">
                      Price: {stockDataSearch?.currentPrice}
                    </p>
                    <p
                      className={`fs-5 fw-bold ${
                        stockDataSearch.change > 0
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      Change: {stockDataSearch?.percentageChange}%
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
                      Date:{" "}
                      {new Date(stockDataSearch.date).toLocaleDateString()} at
                      the hour{" "}
                      {new Date(stockDataSearch.date).toLocaleTimeString()}
                    </p>
                    <div>
                      <Button
                        type="primary"
                        className="mt-2"
                        icon={<HeartOutlined />}
                        onClick={() =>
                          handleAddToWatchlist(stockDataSearch?.symbol)
                        }
                        style={{
                          backgroundColor: "#ff4d4f",
                          borderColor: "#ff4d4f",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Add to Watchlist
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
