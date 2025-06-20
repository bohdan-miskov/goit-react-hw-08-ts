import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const signUp = createAsyncThunk(
  "auth/SignUp",
  async (user, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/LogIn",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post("/users/login", userData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/LogOut", async (_, thunkApi) => {
  try {
    const response = await axios.post("/users/logout");
    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.token;
      setAuthHeader(token);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition(_, thunkApi) {
      const token = thunkApi.getState().auth.token;
      return token !== null;
    },
  }
);
