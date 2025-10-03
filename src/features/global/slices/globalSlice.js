import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: { error: null, loading: false },
  reducers: {
    setError: (state, action) => { state.error = action.payload; },
    clearError: (state) => { state.error = null; },
    setLoading: (state, action) => { state.loading = action.payload; },
  },
});

export const { setError, clearError, setLoading } = globalSlice.actions;
export default globalSlice.reducer;
