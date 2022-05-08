import { Goal } from '../types';
import './GoalList.css';

function GoalList(props: { goals: Goal[] }): JSX.Element {
  return (
    <ul className="goal-list">
      {props.goals.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}

export default GoalList;
