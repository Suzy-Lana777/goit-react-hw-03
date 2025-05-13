import css from './Description.module.css';
import { IoIosCafe } from 'react-icons/io';

export default function Description() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <IoIosCafe className={css.icon} />
        <span className={css.title_span}>Sip</span> Happens Café
      </h1>
      <p className={css.text}>
        Please leave your feedback <span className={css.span}>about </span>
        our service <span className={css.span}>by </span> selecting one{' '}
        <span className={css.span}> of the </span>
        options <span className={css.span}>below</span>.
      </p>
    </div>
  );
}
