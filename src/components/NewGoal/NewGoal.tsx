import React from 'react';
import { addNewGoalHandler } from '../../App';
import { Goal } from '../../types';
import './NewGoal.css';

const NewGoal = (props: { onAddGoal: typeof addNewGoalHandler }) => {
  const addGoalHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newGoal: Goal = {
      id: Math.random().toString(),
      text: 'New Goal !',
    };

    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
