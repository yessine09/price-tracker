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

const Home = React.lazy(() => import("../pages/home/HomePage"));

const AppRoute = () => {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route index path="/register" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoute;
