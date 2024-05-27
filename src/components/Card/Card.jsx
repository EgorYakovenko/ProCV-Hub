import css from './Card.module.css';

export function Card() {
  return (
    <div className={css.container}>
      <h1 className={css.company}>Company</h1>
      <div className={css.columns}>
        <div className={css.column1}>
          <p className={css.dateCreation}>Дата отклика</p>
          <p className={css.select}>Событие</p>
          <p className={css.input}>Ссылка</p>
        </div>
        <div className={css.column2}>
          <p className={css.eventDate}>Дата события</p>
          <p className={css.interview}>Интервью</p>
        </div>
      </div>
    </div>
  );
}
