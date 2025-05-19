import css from './Feedback.module.css';

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.feedback}>
      <p className={css.text}>Good: {feedback.good}</p>
      <p className={css.text}>Neutral: {feedback.neutral}</p>
      <p className={css.text}>Bad: {feedback.bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.list}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
}
