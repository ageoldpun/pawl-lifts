import './App.css';
import WorkoutSummary from './components/WorkoutSummary';

const dummyWorkoutSummaryData = [
  {
    name: 'Workout A',
    exercises: [
      {
        name: 'Squat',
        weight: 55,
      },
      {
        name: 'Bench',
        weight: 45,
      },
      {
        name: 'Barbell Row',
        weight: 70,
      },
    ],
  },
  {
    name: 'Workout B',
    exercises: [
      {
        name: 'Squat',
        weight: 55,
      },
      {
        name: 'Overhead Press',
        weight: 45,
      },
      {
        name: 'Deadlift',
        weight: 70,
      },
    ]
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
          <h2 className="bold">PawlLifts</h2>
      </header>
        { dummyWorkoutSummaryData.map((workoutSummary) => {
          return <WorkoutSummary
            name={workoutSummary.name}
            exercises={workoutSummary.exercises}
          />
        })}
    </div>
  );
}

export default App;
