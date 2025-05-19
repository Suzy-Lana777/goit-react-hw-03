import './App.module.css';
import { useState, useEffect } from 'react';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

export default function App() {
  const [contact, setcontact] = useState([]);
}

// useEffect(() => {
//   localStorage.setItem('feedback', JSON.stringify(feedback));
// }, [feedback]);

// const updateFeedback = (feedbackType) => {
//   if (feedbackType === 'reset') {
//     setFeedback({ good: 0, neutral: 0, bad: 0 });
//   } else {
//     setFeedback((item) => ({
//       ...item,
//       [feedbackType]: item[feedbackType] + 1,
//     }));
//   }
// };

// const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

// const positiveFeedback =
//   totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);
