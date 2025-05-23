import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.label}
        placeholder="Search contacts..."
      />
    </div>
  );
}
