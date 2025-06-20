import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  editContact,
  getContacts,
  removeContact,
} from "./operations";
import { logOut } from "../auth/operations";
import { ContactData } from "../../types/contatcs";

type InitialState = {
  items: ContactData[];
  loading: boolean;
  error: boolean;
  editId: string;
};

const initialState: InitialState = {
  items: [],
  loading: false,
  error: false,
  editId: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setEditId(state, action) {
      state.editId = action.payload;
    },
    clearEditId(state) {
      state.editId = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.items = [];
        state.error = false;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(removeContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id != action.payload);
      })
      .addCase(removeContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(editContact.pending, (state) => {
        state.loading = true;
        state.error = false;
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
      .addCase(editContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default contactsSlice.reducer;

export const { setEditId, clearEditId } = contactsSlice.actions;
