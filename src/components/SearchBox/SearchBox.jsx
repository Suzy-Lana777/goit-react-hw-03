import css from './SearchBox.module.css';

export default function SearchBox({
  feedback = { good: 0 },
  totalFeedback = 0,
  positiveFeedback = 0,
}) {
  return (
    <div className={css.feedback}>
      <p className={css.text}>Good: {feedback.good}</p>
    </div>
  );
}
