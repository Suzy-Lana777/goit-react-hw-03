import './App.module.css';
import { Formik, Form, useFormikContext } from 'formik';

import { useState, useEffect } from 'react';
import InitialContacts from './contacts.json';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

export default function App() {
  const [contacts, setContacts] = useState(InitialContacts);

  const addContacts = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}
