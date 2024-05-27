import css from './SideBar.module.css';

export function SideBar() {
  return (
    <ul className={css.sidebar}>
      <li>Мои отклики</li>
      <li>Статистика</li>
      <li>Мои события</li>
      <li>О приложении</li>
    </ul>
  );
}
