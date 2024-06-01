import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllStatistics } from '../../redux/responses/statistics/selectors';
import { getAllStatistics } from '../../redux/responses/statistics/operations';
import css from './StatisticsCadrd.module.css';

export function StatisticsCard() {
  const statistics = useSelector(selectAllStatistics);
  const dispatch = useDispatch();
  console.log(statistics);

  useEffect(() => {
    dispatch(getAllStatistics());
  }, [dispatch]);

  return (
    <ul className={css.container}>
      <li>
        <p>Количество откликов</p>
        <p>150</p>
      </li>
      <li>
        <p>На рассмотрении</p>
        <p>{statistics['На рассмотрении']}</p>
      </li>
      <li>
        <p>Проигнорировано</p>
        <p>{statistics['Проигнорировано']}</p>
      </li>
      <li>
        <p>Пройдено интервью</p>
        <p>{statistics['Назначили интервью']}</p>
      </li>
      <li>
        <p>Тестовые задания</p>
        <p>{statistics['Тестовое задание']}</p>
      </li>
      <li>
        <p>Отказ</p>
        <p>{statistics['Отказ']}</p>
      </li>
    </ul>
  );
}

// {
//     "На рассмотрении": 4,
//     "Проигнорировано": 1,
//     "Назначили интервью": 1,
//     "Отказ": 1,
//     "Тестовое задание": 2
// }
