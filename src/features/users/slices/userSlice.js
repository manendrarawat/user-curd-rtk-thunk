import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, createUser, editUser, removeUser } from "../services/userService";

export const fetchUsers = createAsyncThunk("users/fetchUsers", getUsers);
export const addUser = createAsyncThunk("users/addUser", createUser);
export const updateUser = createAsyncThunk("users/updateUser", editUser);
export const deleteUser = createAsyncThunk("users/deleteUser", removeUser);

const userSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.status = "loading"; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded"; state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"; state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(updateUser.fulfilled, (state, action) => {
        const idx = state.list.findIndex(u => u.id === action.payload.id);
        if (idx !== -1) state.list[idx] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter(u => u.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
