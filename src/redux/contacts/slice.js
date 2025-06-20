import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  editContact,
  getContacts,
  removeContact,
} from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  editId: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setEditId(state, action) {
      state.editId = action.payload;
    },
    clearEditId(state) {
      state.editId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.items = [];
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id != action.payload);
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        const editContact = action.payload;
        state.items = state.items.map((contact) => {
          if (contact.id === editContact.id) {
            return editContact;
          } else {
            return contact;
          }
        });
      })
      .addCase(editContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default contactsSlice.reducer;

export const { setEditId, clearEditId } = contactsSlice.actions;
