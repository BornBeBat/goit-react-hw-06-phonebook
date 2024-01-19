import { contacts_BASE } from './contacts';

export const getLocalContacts = () => {
  const localContacts = JSON.parse(localStorage.getItem('contacts'));

  return localContacts ? localContacts : contacts_BASE;
};
