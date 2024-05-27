import { useState } from 'react';
import './App.css';

import { Card } from './components/Card/Card';
import { Head } from './components/Head/Head';
import { ResponseForm } from './components/ResponseForm/ResponseForm';
import { SideBar } from './components/SideBar/SideBar';

// import { useState } from 'react';

function App() {
  return (
    <>
      <SideBar />
      <Head />
      <Card />

      {/* <ResponseForm /> */}
    </>
  );
}

export default App;
