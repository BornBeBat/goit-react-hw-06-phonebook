import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from './constants';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    deleteContact: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
