import { Goal } from '../../types';
import './GoalList.css';

const GoalList = (props: { goals: Goal[] }) => {
  return (
    <ul className="goal-list">
      {props.goals.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}

export default GoalList;
