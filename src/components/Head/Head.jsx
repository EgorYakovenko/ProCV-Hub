import { useState } from 'react';
import { ResponseForm } from '../ResponseForm/ResponseForm';

export function Head() {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}> Добавить</button>
      {showForm && <ResponseForm onClose={handleCloseForm} />}
      <p>Фильтр</p>
      <input type="search" name="search" id="" />
    </div>
  );
}
