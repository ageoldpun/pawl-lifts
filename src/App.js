import moment from 'moment';

import './App.css';
import WorkoutSummary from './components/WorkoutSummary';

const dummyWorkoutSummaryData = [
  {
    name: 'Workout A',
    dateOfNextExercise: moment().format("MMM Do"),
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
    selected: true,
  },
  {
    name: 'Workout B',
    dateOfNextExercise: moment().add(2, 'days').format("MMM Do"),
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

function startWorkout() {
  console.log('thing');
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2 className="bold">PawlLifts</h2>
      </header>
        { dummyWorkoutSummaryData.map((workoutSummary) => {
          return <WorkoutSummary
            key={workoutSummary.name}
            date={workoutSummary.dateOfNextExercise}
            name={workoutSummary.name}
            exercises={workoutSummary.exercises}
            selected={workoutSummary.selected}
          />
        })}
        <button className="button" onClick={startWorkout}>Start Workout</button>
    </div>
  );
}

export default App;
