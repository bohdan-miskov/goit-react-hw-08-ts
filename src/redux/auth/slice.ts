import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, signUp } from "./operations";

type InitialState = {
  user: {
    name: null | string;
    email: null | string;
  };
  token: string;
  isLoggedIn: boolean;
  loading: boolean;
  error: boolean;
  isRefreshing: boolean;
};

const initialState: InitialState = {
  user: {
    name: null,
    email: null,
  },
  token: "",
  isLoggedIn: false,
  loading: false,
  error: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.token = "";
        state.user = {
          name: null,
          email: null,
        };
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = true;
      });
  },
});

export default authSlice.reducer;
