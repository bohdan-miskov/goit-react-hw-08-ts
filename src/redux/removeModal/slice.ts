import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  enabled: boolean;
  hideUntil: number;
};

const initialState: InitialState = {
  enabled: true,
  hideUntil: 0,
};

const removeModalSlice = createSlice({
  name: "removeModal",
  initialState,
  reducers: {
    disableModal(state) {
      state.enabled = false;
      state.hideUntil = new Date().getDate() + 7;
    },
    checkModalExpiration: (state) => {
      if (state.hideUntil) {
        const now = new Date();
        const expiry = new Date(state.hideUntil);
        if (now > expiry) {
          state.enabled = true;
          state.hideUntil = 0;
        }
      }
    },
  },
});

export default removeModalSlice.reducer;
export const { disableModal, checkModalExpiration } = removeModalSlice.actions;
