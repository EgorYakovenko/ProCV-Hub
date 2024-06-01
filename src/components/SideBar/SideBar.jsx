import css from './SideBar.module.css';
import { NavLink } from 'react-router-dom';

export function SideBar() {
  return (
    <ul className={css.sidebar}>
      <NavLink to="/response"> Мои отклики</NavLink>
      <NavLink to="/statistic"> Статистика</NavLink>
      <NavLink to="/event"> Мои события</NavLink>
      <NavLink to="/about"> О приложении</NavLink>
    </ul>
  );
}

// <li>Мои отклики</li>
//       <li>Статистика</li>
//       <li>Мои события</li>
//       <li>О приложении</li>
