import moment from 'moment';

import './App.css';
import Summary from './components/Summary';

const dummyWorkoutData = [
  {
    name: 'Workout A',
    date: moment().format("ddd, MMM Do"),
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
    date: moment().add(2, 'days').format("ddd, MMM Do"),
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
  console.log('start workout');
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2 className="bold">PawlLifts</h2>
      </header>
      <Summary
        upcomingWorkouts={dummyWorkoutData}
        startWorkout={startWorkout}
      />
    </div>
  );
}

export default App;
