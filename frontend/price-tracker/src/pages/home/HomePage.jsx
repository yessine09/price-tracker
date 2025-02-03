import React, { useState } from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import stockService from "../../services/stockService";
import StockHistoryChart from "../stocks/StockHistoryChart";
import { Input, Button, Alert } from "antd";
import { SearchOutlined, StockOutlined } from "@ant-design/icons";

const HomePage = () => {
  const [symbol, setSymbol] = useState("");
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await stockService.getStockPrice(symbol);
      console.log(response);

      setStockData(response.data);
      console.log(stockData);

      setError(null); // Réinitialiser l'erreur en cas de succès
    } catch (err) {
      setStockData(null); // Réinitialiser les données en cas d'erreur
      setError("Stock not found or invalid symbol.");
    } finally {
      setLoading(false); // Reset loading state after the request is complete
    }
  };

  const price = stockData?.price;
  const change = stockData?.change ?? "N/A"; // Use 'change' instead of 'changePercentage'

  console.log("Stock Data:", stockData); // Inspect full stock data

  // Check if price is a valid number before formatting
  const formattedPrice =
    typeof price === "string" && !isNaN(price)
      ? parseFloat(price).toFixed(2)
      : "N/A";

  // If change is 'N/A', you don't need to apply `.toFixed()` since it's a string
  const formattedChange =
    typeof change === "string" && change !== "N/A" ? change : "N/A"; // Keep 'N/A' or fallback value if not available

  console.log(formattedPrice, formattedChange);

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
                <h1 className="h4">PriceTracker Dashboard</h1>
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
                        <h5 className="card-title widget-card-title mb-3">
                          Stock news
                        </h5>
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
                <div class="card widget-card bsb-timeline-8 border-light shadow-sm h-100">
                  <div class="card-body p-4">
                    <h5 class="card-title widget-card-title mb-3">
                      Recent Transactions
                    </h5>

                    <ul class="timeline">
                      <li class="timeline-item">
                        <div class="timeline-body">
                          <div class="timeline-meta">
                            <span>32 minutes</span>
                          </div>
                          <div class="timeline-content timeline-indicator">
                            <h6 class="mb-1">
                              Amount received in the PayPal gateway.
                            </h6>
                            <span class="text-secondary fs-7">
                              User: William Lucas
                            </span>
                          </div>
                        </div>
                      </li>
                      <li class="timeline-item">
                        <div class="timeline-body">
                          <div class="timeline-meta">
                            <span>49 minutes</span>
                          </div>
                          <div class="timeline-content timeline-indicator">
                            <h6 class="mb-1">
                              New sale recorded in the Bootstrap admin
                              templates.
                            </h6>
                            <span class="text-secondary fs-7">
                              Product: Console
                            </span>
                          </div>
                        </div>
                      </li>
                      <li class="timeline-item">
                        <div class="timeline-body">
                          <div class="timeline-meta">
                            <span>2 hours</span>
                          </div>
                          <div class="timeline-content timeline-indicator">
                            <h6 class="mb-1">
                              User registered in the discount campaign.
                            </h6>
                            <span class="text-secondary fs-7">
                              Country: United States
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="card widget-card border-light shadow-sm h-100">
                  <div className="card shadow-lg p-4">
                    <h3 className="text-center mb-4">Stock Search</h3>
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
                          Price: ${parseFloat(stockData.price).toFixed(2)}
                        </p>
                        <p
                          className={`fs-5 fw-bold ${
                            stockData.change > 0
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          Change: {stockData.change}%
                        </p>
                      </div>
                    )}
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
