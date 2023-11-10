import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/contacts-selectors';

export const selectFilter = state => state.filter.value;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  }
);