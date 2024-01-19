import { configureStore } from '@reduxjs/toolkit';
import { contactsSlise } from './contactsSlise';
import { filterSlise } from './filterSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsSlise.reducer,
    filter: filterSlise.reducer,
  },
});
