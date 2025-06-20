import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enabled: true,
  hideUntil: null,
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
          state.hideUntil = null;
        }
      }
    },
  },
});

export default removeModalSlice.reducer;
export const { disableModal, checkModalExpiration } = removeModalSlice.actions;
