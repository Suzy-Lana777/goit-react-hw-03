import './App.module.css';
import { useState, useMemo, useEffect } from 'react';
import InitialContacts from './contacts.json';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

export default function App() {
  const [contacts, setContacts] = useState(InitialContacts);
  const [filter, setFilter] = useState('');

  const visibleContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [contacts, filter]);

  const addContacts = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
