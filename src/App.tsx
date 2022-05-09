import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import { Goal } from './types';

let goals: Goal[] = [];
let setGoal: React.Dispatch<React.SetStateAction<Goal[]>>;

export const addNewGoalHandler = (newGoal: Goal) => {
  setGoal((previousGoals)=> previousGoals.concat(newGoal));
};

const App = () => {
  [goals, setGoal] = useState([
    { id: '1', text: 'Eat' },
    { id: '2', text: 'Hack' },
    { id: '3', text: 'Sleep' },
    { id: '4', text: 'Repeat' },
  ]);

  return (
    <div>
      <h2 className="App-header">Life goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={goals} />
    </div>
  );
};

export default App;
