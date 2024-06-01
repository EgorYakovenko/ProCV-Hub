import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import { selectAllResponses } from '../../redux/responses/selectors';

export function CardList() {
  const responses = useSelector(selectAllResponses);
  //   console.log(responses);
  return (
    <ul>
      {responses.map((response, index) => (
        <li key={index}>
          <Card data={response} />
        </li>
      ))}
    </ul>
  );
}
