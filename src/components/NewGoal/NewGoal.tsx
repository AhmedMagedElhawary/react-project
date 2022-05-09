import React, { useState } from 'react';
import { addNewGoalHandler } from '../../App';
import { Goal } from '../../types';
import './NewGoal.css';

const NewGoal = (props: { onAddGoal: typeof addNewGoalHandler }) => {
  const [enteredText, setEnteredText] = useState('');

  const addGoalHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newGoal: Goal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    props.onAddGoal(newGoal);

    setEnteredText('');
  };

  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
