import React from 'react';

export default function Workout(props) {
  const { workouts } = props;

  return (
    <div>
      <header className="app-header">
        <select className="workout-dropdown" name="workouts" id="workouts">
          {workouts.map(workout => <option key={workout.name} value={workout.name}>{workout.name}</option>)}
        </select>
      </header>
      {JSON.stringify(workouts)}
    </div>
  );
}
