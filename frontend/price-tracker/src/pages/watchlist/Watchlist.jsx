import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Alert } from "antd";
import { DeleteOutlined, HomeOutlined } from "@ant-design/icons";
import stockService from "../../services/stockService";
import moment from "moment"; // For date formatting
import Swal from "sweetalert2";
import NavBar from "../../layouts/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";

const Watchlist = () => {
  const auth = useSelector((state) => state.user?.currentUser);
  const userId = auth?.user?._id;

  const [watchlist, setWatchlist] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the user's watchlist
  useEffect(() => {
    if (userId) {
      getWatchlist(userId);
    }
  }, [userId]);

  // Function to get the watchlist data
  const getWatchlist = async (userId) => {
    try {
      const response = await stockService.getWatchlist(userId);
      if (response.data && Array.isArray(response.data?.stocks)) {
        setWatchlist(response.data.stocks);
        setError(null);
      } else {
        setError("Data is not in expected format.");
      }
    } catch (err) {
      setError("An error occurred while fetching your watchlist.");
      setWatchlist([]); // Reset watchlist on error
    } finally {
      setLoading(false);
    }
  };

  // Function to remove a stock from the watchlist
  const removeFromWatchlist = async (stockId) => {
    if (!userId) {
      setError("Please log in to remove from the watchlist");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "This stock will be removed from your watchlist!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await stockService.removeFromWatchlist(userId, stockId);
          setWatchlist((prevWatchlist) =>
            prevWatchlist.filter((stock) => stock._id !== stockId)
          );
          Swal.fire({
            title: "Removed!",
            text: "Stock has been removed from your watchlist.",
            icon: "success",
          });
          setError(null); // Reset error
        } catch (err) {
          setError("Failed to remove stock from watchlist.");
          Swal.fire("Error!", "Failed to remove stock from watchlist", "error");
        }
      }
    });
  };

  return (
    <>
      <NavBar />
      {/* WatchList Section */}
      <section className="pb-3 pb-md-4 pb-xl-5 bg-light mt-5">
        <div className="container">
          <div className="row gy-3 gy-md-4">
            <div className="">
              <div className="card widget-card border-light shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                    <div className="container mt-5">
                      <h1
                        className="mb-4 text-center"
                        style={{ color: "#2E3A59" }}
                      >
                        My Watchlist
                      </h1>
                      {error && <Alert message={error} type="error" showIcon />}

                      {/* List of stocks in a Card layout */}
                      <div className="row">
                        {watchlist.map((stock) => (
                          <div className="col-md-4 mb-4" key={stock._id}>
                            <Card
                              hoverable
                              title={
                                <span
                                  style={{
                                    color: "#2E3A59",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Stock:{" "}
                                  <span style={{ color: "#0059b3" }}>
                                    {stock.symbol}
                                  </span>{" "}
                                </span>
                              }
                              extra={
                                <Button
                                  onClick={() => removeFromWatchlist(stock._id)}
                                  type="link"
                                  style={{ color: "red" }}
                                  icon={<DeleteOutlined />}
                                />
                              }
                              style={{
                                border: "1px solid #ddd",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "#f9f9f9",
                              }}
                              className="shadow-sm"
                            >
                              <p style={{ color: "#4CAF50" }}>
                                <strong>Current Price:</strong> $
                                {stock.currentPrice}
                              </p>

                              {/* Percentage Change */}
                              <p
                                style={{
                                  color:
                                    stock.percentageChange > 0
                                      ? "#4CAF50"
                                      : "#f44336",
                                }}
                              >
                                <strong>Change:</strong>{" "}
                                {stock.percentageChange > 0 ? "+" : ""}
                                {stock.percentageChange}%
                              </p>

                              {/* Created At Date */}
                              <p>
                                <strong>Added On:</strong>{" "}
                                {moment(stock.createdAt).format("MMM D, YYYY")}
                              </p>
                            </Card>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link to="/home">
                    <Button
                      type="primary"
                      icon={<HomeOutlined />}
                      className="mb-4 responsive-btn"
                      size="large"
                    >
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Watchlist;
