import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ContactCreateData,
  ContactData,
  EditContactData,
} from "../../types/contatcs";
axios.defaults.baseURL = "https://connections-api.goit.global";

export const getContacts = createAsyncThunk("contacts/getAll", async () => {
  const response = await axios.get<ContactData[]>("/contacts");
  return response.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact: ContactCreateData) => {
    const response = await axios.post<ContactData>("/contacts", newContact);
    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id: string) => {
    const response = await axios.delete<ContactData>(`/contacts/${id}`);
    return response.data.id;
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ newContact, id }: EditContactData) => {
    const response = await axios.patch<ContactData>(
      `/contacts/${id}`,
      newContact
    );
    return response.data;
  }
);
