import { createSlice } from "@reduxjs/toolkit";
import { addContact } from "../contacts/operations";

const initialState = {
  value: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload?.trim().toLowerCase();
    },
  },
  extraReducers: (builder) =>
    builder.addCase(addContact.fulfilled, (state) => {
      state.value = "";
    }),
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
