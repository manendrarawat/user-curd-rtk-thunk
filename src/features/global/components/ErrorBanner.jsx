import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../slices/globalSlice";

const ErrorBanner = () => {
  const error = useSelector(state => state.global.error);
  const dispatch = useDispatch();

  if (!error) return null;

  return (
    <div className="error-banner">
      {error}
      <button onClick={() => dispatch(clearError())}>X</button>
    </div>
  );
};

export default ErrorBanner;
