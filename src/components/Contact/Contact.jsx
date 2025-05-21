import css from './Contact.module.css';

export default function Contact({ name, number }) {
  return (
    <div>
      <div className={css.flex}>
        <p className={css.h2}>{name}</p>
        <p className={css.p}>{number}</p>
      </div>
      <button className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}
