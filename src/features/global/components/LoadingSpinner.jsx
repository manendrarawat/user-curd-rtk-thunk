import React from "react";
import { useSelector } from "react-redux";

const LoadingSpinner = () => {
  const loading = useSelector(state => state.global.loading);
  if (!loading) return null;

  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner-box">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
