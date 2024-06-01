import css from './Card.module.css';

import { selectAllResponses } from '../../redux/responses/selectors';
import { useSelector } from 'react-redux';

export function Card({ data }) {
  if (!data) {
    console.log('ERROR');
    return null;
  }

  return (
    <div className={css.container}>
      <div className={css.card}>
        <h1 className={css.company}>{data.nameCompany}</h1>
        <div className={css.columns}>
          <div className={css.column1}>
            <p className={css.dateCreation}>Дата отклика: {data.dateResp}</p>
            <p className={css.select}>Событие: {data.reviewResult}</p>
            <p className={css.input}>
              Ссылка: <a href={data.link}>{data.link}</a>
            </p>
          </div>
          <div className={css.column2}>
            <p className={css.eventDate}>Дата события: {data.dateEvent}</p>
            <p className={css.interview}>Интервью: {data.interview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={css.container}>
  <h1 className={css.company}>Company{response.nameCompany}</h1>
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
</div>; */
}

// {
//   dateEvent,
//   dateResp,
//   interview,
//   link,
//   nameCompany,
//   reviewResult,
// }
