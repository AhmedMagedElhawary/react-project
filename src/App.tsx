import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

import { Goal } from './types';

const myLifeGoals: Goal[] = [
  { id: '1', text: 'Eat' },
  { id: '2', text: 'Hack' },
  { id: '3', text: 'Sleep' },
  { id: '4', text: 'Repeat' },
];

export const addNewGoalHandler = (goal: Goal) =>{
  myLifeGoals.push(goal);

  console.log(myLifeGoals);
}

const App = () => {
  return (
    <div>
      <h2 className="App-header">Life goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={myLifeGoals} />
    </div>
  );
};

export default App;
