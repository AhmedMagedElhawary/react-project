import React from 'react';
import { addNewGoalHandler } from '../../App';
import { Goal } from '../../types';
import './NewGoal.css';

let newGoalText = '';

const NewGoal = (props: { onAddGoal: typeof addNewGoalHandler }) => {
  const addGoalHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newGoal: Goal = {
      id: Math.random().toString(),
      text: newGoalText,
    };

    props.onAddGoal(newGoal);
  };

  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    newGoalText = event.target.value;
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
