import css from './Card.module.css';

export function Card() {
  return (
    <div className={css.container}>
      <h1 className={css.company}>Company</h1>
      <div className={css.columns}>
        <div className={css.column1}>
          <input className={css.dateCreation} type="date" name="" id="" />
          {/* <p className={css.dateCreation}>24.05.2024</p> */}
          <select className={css.select}>
            <option value="option1">На рассмотрении</option>
            <option value="option2">Проигнорировано</option>
            <option value="option3">Назначили интервью</option>
            <option value="option4">Тестовое задание</option>
            <option value="option5">Отказ</option>
          </select>
          <input className={css.input} type="text" placeholder="Link" />
        </div>
        <div className={css.column2}>
          <input className={css.eventDate} type="date" name="" id="" />
          {/* <p className={css.eventDate}>30.05.2024</p> */}
          <input
            className={css.interview}
            type="text"
            placeholder="interview"
          />
          {/* <p className={css.interview}>HR интервью</p> */}
        </div>
      </div>
    </div>
  );
}
