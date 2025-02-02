import React from "react";
import "./loadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="spinner">
        <div className="spinner-inner"></div>
      </div>
      <p className="loading-text">
        Please wait, we are loading your content...
      </p>
    </div>
  );
};
    
export default LoadingScreen;
