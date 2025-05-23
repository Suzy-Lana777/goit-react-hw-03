import css from './Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';

export default function Contact({ id, name, number, onDelete }) {
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
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
