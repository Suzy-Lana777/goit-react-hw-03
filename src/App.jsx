import './App.css';
import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';

export default function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('feedback')) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  );

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 'reset') {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((item) => ({
        ...item,
        [feedbackType]: item[feedbackType] + 1,
      }));
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <div className="container">
        <Description />
      </div>
      <div>
        <Options clickButton={updateFeedback} totalFeedback={totalFeedback} />
      </div>
      <div>
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
