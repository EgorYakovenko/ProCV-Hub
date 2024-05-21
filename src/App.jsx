import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// import { useState } from 'react';

function App() {
  const [data, setData] = useState([
    {
      date: '',
      nameOfCompany: '',
      link: '',
      dropdown: 'option1',
      interview: '',
    },
  ]);

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const handleAddRow = () => {
    setData([
      ...data,
      {
        date: '',
        nameOfCompany: '',
        link: '',
        dropdown: 'option1',
        interview: '',
      },
    ]);
  };

  const handleRemoveRow = index => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleDropdownChange = (index, value) => {
    const newData = [...data];
    newData[index].dropdown = value; // Обновляем значение выпадающего меню
    console.log(index);
    setData(newData);
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
    </div>
  );
}

export default App;
