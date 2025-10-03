import { setLoading } from "../slices/globalSlice";

const loadingMiddleware = (store) => (next) => (action) => {
  const { type } = action;

  if (type.endsWith("/pending")) store.dispatch(setLoading(true));
  if (type.endsWith("/fulfilled") || type.endsWith("/rejected")) store.dispatch(setLoading(false));

  return next(action);
};

export default loadingMiddleware;
