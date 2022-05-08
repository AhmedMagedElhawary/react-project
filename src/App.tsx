import "./App.css";
import GoalList from "./components/GoalList";
import { Goal } from "./types";

function App() {
  const myLifeGoals : Goal[] = [
    { id: "1", text: "Eat" },
    { id: "2", text: "Hack" },
    { id: "3", text: "Sleep" },
    { id: "4", text: "Repeat" },
  ];

  return (
    <div>
      <h2 className="App-header">Life goals</h2>
      <GoalList goals={myLifeGoals} />
    </div>
  );
}

export default App;
