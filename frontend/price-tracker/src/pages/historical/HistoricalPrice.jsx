import React, { useEffect, useState } from "react";
import stockService from "../../services/stockService";
import { useParams } from "react-router-dom";

const HistoricalPrice = ({ symbol }) => {
  const { symbol: paramSymbol } = useParams();
  const [historical, setHistorical] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const actualSymbol = paramSymbol || symbol;

  useEffect(() => {
    const getHistoricalList = async () => {
      setLoading(true);
      try {
        const response = await stockService.getHistoricalData(actualSymbol);
        console.log("response historical", response);
        setHistorical(response.data); // Ensure response.data is an array
        setError(null);
      } catch (err) {
        setError("An error occurred while fetching historical data.");
        setHistorical([]);
      } finally {
        setLoading(false);
      }
    };

    getHistoricalList();
  }, [actualSymbol]);

  return (
    <div className="card widget-card bsb-timeline-8 border-light shadow-sm h-100">
      <div className="card-body p-4">
        <h4
          className="mb-4 fw-bold text-bold"
          style={{ fontSize: "24px", letterSpacing: "1px" }}
        >
          Historical Price Data{" "}
          <span style={{ color: "blue" }}> {actualSymbol} </span>
        </h4>

        {loading ? (
          <p>Loading historical data...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            <ul className="timeline">
              {Array.isArray(historical) && historical.length > 0 ? (
                historical.map((entry, index) => (
                  <li key={index} className="timeline-item">
                    <div className="timeline-body">
                      <div className="timeline-meta">
                        <span>{new Date(entry.date).toLocaleDateString()}</span>
                      </div>
                      <div className="timeline-content timeline-indicator">
                        <h6 className="mb-1">
                          Stock Price Data for{" "}
                          <span className="text-secondary">{entry.symbol}</span>
                        </h6>
                        <span className="text-secondary fs-7">
                          Open: {entry.open} | High: {entry.high} | Low:{" "}
                          {entry.low} | Close: {entry.close}
                        </span>
                        <br />
                        <span className="text-secondary fs-7">
                          Volume: {entry.volume.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p>No historical data available.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoricalPrice;
