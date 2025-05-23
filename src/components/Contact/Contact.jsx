import css from './Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';

export default function Contact({ name, number }) {
  return (
    <div>
      <div className={css.flex}>
        <p className={css.h2}>
          <BsFillPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.p}>
          <MdPhone className={css.icon} /> {number}
        </p>
      </div>
      <button className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}
