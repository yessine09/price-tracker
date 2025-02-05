import React, { useEffect, useState } from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import stockService from "../../services/stockService";
import { Input, Button, Alert, message, AutoComplete } from "antd";
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

const HomePage = () => {
  const [symbol, setSymbol] = useState("");
  const [symbolSearch, setSymbolSearch] = useState("");
  const [stockData, setStockData] = useState(null);
  const [stockDataSearch, setStockDataSearch] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [symbolH, setSymbolH] = useState("AAPL");

  const auth = useSelector((state) => state.user?.currentUser);
  const userId = auth?.user?._id;

  const stockSymbols = ["AAPL", "TSLA", "GOOGL", "AMZN", "MSFT"]; // Example list of stock symbols

  // Filter symbols based on the user's input
  const filteredSymbols = stockSymbols.filter((symbol) =>
    symbol.toUpperCase().startsWith(symbolSearch.toUpperCase())
  );

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await stockService.getStockPrice(symbol);
      console.log(response);

      if (response.data) {
        setStockData(response.data);
        setError(null); // Réinitialiser l'erreur si la récupération réussit
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
  const handleAddToWatchlist = async () => {
    if (!userId) {
      Swal.fire({
        icon: "warning",
        title: "You must be logged in to add to watchlist.",
        confirmButtonText: "Ok",
      });
      return;
    }

    try {
      // Récupérer le dernier stock enregistré
      const lastStockResponse = await stockService.getLastStock();
      const lastStock = lastStockResponse?.data;
      console.log("last stock", lastStock);

      if (!lastStock || !lastStock._id) {
        Swal.fire({
          icon: "error",
          title: "No stock found to add.",
          confirmButtonText: "Ok",
        });
        return;
      }

      // Check if stock is already in watchlist
      if (watchlist.some((stock) => stock._id === lastStock._id)) {
        Swal.fire({
          icon: "info",
          title: `${lastStock.symbol} is already in your watchlist.`,
          confirmButtonText: "Ok",
        });
        return;
      }

      // Ajouter le stock à la watchlist avec l'ID récupéré
      await stockService.addToWatchlist(userId, lastStock._id);

      // Mettre à jour l'état de la watchlist
      const updatedWatchlist = [...watchlist, lastStock];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

      Swal.fire({
        icon: "success",
        title: `${lastStock.symbol} added to watchlist!`,
        confirmButtonText: "Great!",
      });
    } catch (error) {
      console.error("Failed to add to watchlist", error);
      Swal.fire({
        icon: "error",
        title: "Failed to add to watchlist.",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleButtonClick = () => {
    setSymbolH(symbolSearch); // Set the symbolSearch from the input
    handleSearchStock(symbolSearch); // Update symbolH for HistoricalPrice
    handleSearchStock();
  };

  // Load watchlist from localStorage on page load
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  return (
    <>
      <NavBar />
      <main id="main">
        {/* Section - Bootstrap Brain Component */}
        {/* Breadcrumb */}
        <section className="py-3 py-md-4 py-xl-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1
                  className=" mb-4 fw-bold text-bold"
                  style={{ fontSize: "24px", letterSpacing: "1px" }}
                >
                  PriceTracker Dashboard
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb m-0 fs-7">
                    <li className="breadcrumb-item">
                      <a
                        className="link-primary text-decoration-none"
                        href="index.html"
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* Section - Bootstrap Brain Component */}
        {/* Card 1 - Bootstrap Brain Component */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">
                          Sales
                        </h5>
                        <h4 className="card-subtitle text-body-secondary m-0">
                          $6,820
                        </h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-truck fs-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-45" />
                          </span>
                          <div>
                            <p className="fs-7 mb-0">-9%</p>
                            <p className="fs-7 mb-0 text-secondary">
                              since last week
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">
                          Earnings
                        </h5>
                        <h4 className="card-subtitle text-body-secondary m-0">
                          $21,900
                        </h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar fs-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-n45" />
                          </span>
                          <div>
                            <p className="fs-7 mb-0">+26%</p>
                            <p className="fs-7 mb-0 text-secondary">
                              since last week
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">
                          Visitors
                        </h5>
                        <h4 className="card-subtitle text-body-secondary m-0">
                          3,764
                        </h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-person fs-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-n45" />
                          </span>
                          <div>
                            <p className="fs-7 mb-0">+69%</p>
                            <p className="fs-7 mb-0 text-secondary">
                              since last week
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title widget-card-title mb-3">
                          Orders
                        </h5>
                        <h4 className="card-subtitle text-body-secondary m-0">
                          786
                        </h4>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart fs-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex align-items-center mt-3">
                          <span className="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-right-short bsb-rotate-45" />
                          </span>
                          <div>
                            <p className="fs-7 mb-0">-21%</p>
                            <p className="fs-7 mb-0 text-secondary">
                              since last week
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section - Bootstrap Brain Component */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="">
                {/* Chart 1 - Bootstrap Brain Component */}
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                      <div className="mb-3 mb-sm-0">
                        <h4
                          className=" mb-4 fw-bold text-bold"
                          style={{ fontSize: "24px", letterSpacing: "1px" }}
                        >
                          Stock News
                        </h4>

                        <img
                          src="./assets/img/finance.jpg"
                          alt="Stock News"
                          style={{
                            width: "120%",
                            height: "250px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                            transition: "transform 0.3s ease-in-out",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.transform = "scale(1.05)")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.transform = "scale(1)")
                          }
                        />
                      </div>
                    </div>
                    <div id="bsb-chart-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section - Bootstrap Brain Component */}
        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="col-12 col-lg-6 col-xl-5">
                {/* hisory */}
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
                          setSymbolSearch(symbol); // Set the value to the selected symbol
                          // handleSymbolClick(symbol); // Update the symbolH state for HistoricalPrice
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
                          <Link to={`/home/${stockDataSearch?._id}`}>
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
                          {new Date(stockDataSearch.date).toLocaleDateString()}{" "}
                          at the hour{" "}
                          {new Date(stockDataSearch.date).toLocaleTimeString()}
                        </p>
                        <div>
                          <Button
                            type="primary"
                            className="mt-2"
                            icon={<HeartOutlined />}
                            onClick={handleAddToWatchlist}
                            style={{
                              backgroundColor: "#ff4d4f", // Heart color
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
        </section>

        {/* Scrap Section */}

        <section className="pb-3 pb-md-4 pb-xl-5 bg-light">
          <div className="container">
            <div className="row gy-3 gy-md-4">
              <div className="">
                {/* Chart 1 - Bootstrap Brain Component */}
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
                              Date:{" "}
                              {new Date(stockData.date).toLocaleDateString()} at
                              the hour{" "}
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
