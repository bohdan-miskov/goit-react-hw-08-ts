import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://connections-api.goit.global";

export const getContacts = createAsyncThunk("contacts/getAll", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const response = await axios.post("/contacts", newContact);
    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data.id;
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ newContact, id }) => {
    const response = await axios.patch(`/contacts/${id}`, newContact);
    return response.data;
  }
);
