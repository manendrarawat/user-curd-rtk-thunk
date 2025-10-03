// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, createUser, editUser, removeUser } from "../services/userService";

// Async Thunks
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return await getUsers();
});

export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  return await createUser(newUser);
});

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  return await editUser(user);
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  return await removeUser(id);
});

// Slice
const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Add
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // Update
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })

      // Delete
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
