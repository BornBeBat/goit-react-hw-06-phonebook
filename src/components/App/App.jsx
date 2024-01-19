import { AppContainer, MainTitle, SecondaryTitle } from './App.styled';
import { ContactForm, ContactList, Filter } from 'components';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts');

  return (
    <AppContainer>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
