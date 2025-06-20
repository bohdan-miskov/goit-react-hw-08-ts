import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filters/selector";
import { RootState } from "../store";

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectContactsLoading = (state: RootState) =>
  state.contacts.loading;
export const selectContactsError = (state: RootState) => state.contacts.error;
export const selectContactsEditId = (state: RootState) => state.contacts.editId;
export const selectEditingContact = createSelector(
  [selectContacts, selectContactsEditId],
  (contacts, editId) => {
    return contacts.find(({ id }) => id === editId);
  }
);
export const selectViewedContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter) ||
        number.toLowerCase().includes(filter)
    );
  }
);
