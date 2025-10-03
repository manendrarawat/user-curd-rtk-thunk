const errorMiddleware = (store) => (next) => (action) => {
  if (action.type.endsWith("rejected")) {
    console.error("❌ API Error:", action.error?.message);
    store.dispatch({
      type: "global/setError",
      payload: action.error?.message || "Something went wrong",
    });
  }
  return next(action);
};

export default errorMiddleware;
