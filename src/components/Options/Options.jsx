import css from './Options.module.css';

export default function Options({ clickButton, totalFeedback }) {
  return (
    <div>
      <button className={css.button} onClick={() => clickButton('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => clickButton('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => clickButton('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={() => clickButton('reset')}>
          Reset
        </button>
      )}
    </div>
  );
}
