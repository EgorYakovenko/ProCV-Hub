import { useState } from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { getAllResponses } from './redux/responses/operations';
import { addResponse } from './redux/responses/operations';
import { updateRow, addRow, removeRow } from './redux/responses/slice';

// import { useState } from 'react';

function App() {
  const data = useSelector(state => state.table.data);
  const status = useSelector(state => state.table.status);
  const error = useSelector(state => state.table.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getAllResponses());
    }
  }, [status, dispatch]);

  const handleChange = (index, field, value) => {
    dispatch(updateRow({ index, field, value }));
  };

  const handleDropdownChange = (index, value) => {
    dispatch(updateRow({ index, field: 'dropdown', value }));
  };

  const handleAddRow = () => {
    dispatch(addRow());
  };

  const handleRemoveRow = index => {
    dispatch(removeRow(index));
  };

  const handleSubmit = () => {
    dispatch(addResponse(data));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название компании</th>
            <th>Ссылка на вакансию</th>
            <th>Результат отзыва</th>
            <th>Интервью</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="date"
                  value={row.date}
                  onChange={e => handleChange(index, 'date', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.nameOfCompany}
                  onChange={e =>
                    handleChange(index, 'nameOfCompany', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.link}
                  onChange={e => handleChange(index, 'link', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={row.dropdown}
                  onChange={e => handleDropdownChange(index, e.target.value)}
                >
                  <option value="option1">На рассмотрении</option>
                  <option value="option2">Проигнорировано</option>
                  <option value="option3">Назначили интервью</option>
                  <option value="option4">Тестовое задание</option>
                  <option value="option5">Отказ</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={row.interview}
                  onChange={e =>
                    handleChange(index, 'interview', e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => handleRemoveRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleSubmit}>Save Data</button>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;
