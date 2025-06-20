import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filters/selector";

export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;
export const selectContactsEditId = (state) => state.contacts.editId;
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
