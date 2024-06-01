import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Card } from './components/Card/Card';
import { CardList } from './components/CardList/CardList';
import { Head } from './components/Head/Head';
import { SideBar } from './components/SideBar/SideBar';
import { getAllResponses } from './redux/responses/operations';
import { MyResponsesPage } from './Page/MyPesposesPage';
import { StatisticsPage } from './Page/StatisticsPage';
import { MyEventsPage } from './Page/MyEventsPage';
import { AboutPage } from './Page/AboutPage';

// import { useState } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllResponses());
  }, [dispatch]);

  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/response" element={<MyResponsesPage />} />
        <Route path="/statistic" element={<StatisticsPage />} />
        <Route path="/event" element={<MyEventsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {/* <Head />
      <Card /> */}
      {/* <CardList /> */}
      {/* <ResponseForm /> */}
    </>
  );
}

export default App;

{
  /* <NavLink to="/response"> Мои отклики</NavLink>
      <NavLink to="/statistic"> Статистика</NavLink>
      <NavLink to="/event"> Мои события</NavLink>
      <NavLink to="/about"> О приложении</NavLink> */
}
