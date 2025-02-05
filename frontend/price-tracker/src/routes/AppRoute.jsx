import React, { Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { Route, Routes } from "react-router-dom";
import NavBar from "../layouts/NavBar";
import HomePage from "../pages/home/HomePage";
import Footer from "../layouts/Footer";
import ProtectedRoute from "./ProtectedRoute";
import PageError from "../components/PageError";
import Watchlist from "../pages/watchlist/Watchlist";
import StockDetail from "../pages/stocks/StockDetail";
import HistoricalPrice from "../pages/historical/HistoricalPrice";
import HistoricalChart from "../pages/historical/HistoricalChart";

const Home = React.lazy(() => import("../pages/home/HomePage"));

const AppRoute = () => {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route index path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
          <Route
            path="/watchlist"
            element={<ProtectedRoute component={Watchlist} />}
          />
          <Route
            path="/historical"
            element={<ProtectedRoute component={HistoricalPrice} />}
          />
          <Route
            path="/chart"
            element={<ProtectedRoute component={HistoricalChart} />}
          />

          <Route
            path="/home/:id"
            element={<ProtectedRoute component={StockDetail} />}
          />

          <Route path="*" element={<PageError />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoute;
