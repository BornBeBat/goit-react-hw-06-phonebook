import { createSlice } from '@reduxjs/toolkit';
import { getLocalContacts, setLocalContacts } from 'utils';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: getLocalContacts(),
  reducers: {
    addContact: (state, action) => {
      const result = [...state, action.payload];
      setLocalContacts(result);
      return result;
    },
    deleteContact: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
