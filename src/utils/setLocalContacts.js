export const setLocalContacts = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};
