import moment from 'moment';
import React from 'react';

import './App.css';

import Summary from './components/Summary';
import Workout from './components/Workout';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'summary',
    };
    this.startWorkout = this.startWorkout.bind(this);
  }

  startWorkout() {
    this.setState({
      view: 'workout',
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.view === 'summary' ?
          <Summary
            upcomingWorkouts={dummyWorkoutData}
            startWorkout={this.startWorkout}
          />
          :
          <Workout
            workout={dummyWorkoutData[0]}
          />
        }
      </div>
    );
  }
}

export default App;
