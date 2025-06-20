import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  UserLogInData,
  UserReceiveData,
  UserRegisterData,
} from "../../types/auth";
import { RootState } from "../store";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const signUp = createAsyncThunk(
  "auth/SignUp",
  async (user: UserRegisterData) => {
    const response = await axios.post<UserReceiveData>("/users/signup", user);
    setAuthHeader(response.data.token);
    return response.data;
  }
);

export const logIn = createAsyncThunk(
  "auth/LogIn",
  async (userData: UserLogInData) => {
    const response = await axios.post<UserReceiveData>(
      "/users/login",
      userData
    );
    setAuthHeader(response.data.token);
    return response.data;
  }
);

export const logOut = createAsyncThunk("auth/LogOut", async () => {
  await axios.post("/users/logout");
  clearAuthHeader();
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const token = state.auth.token;
    setAuthHeader(token);
    const response = await axios.get("/users/current");
    return response.data;
  },
  {
    condition(_, thunkApi) {
      const state = thunkApi.getState() as RootState;
      const token = state.auth.token;
      return token !== "";
    },
  }
);
