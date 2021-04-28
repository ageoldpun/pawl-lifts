import React from 'react';

export default function Workout(props) {
  const { workout } = props;

  return (
    <div>
      <header className="app-header">
        <h2 className="bold">PawlLifts</h2>
      </header>
      {workout.exercises.map((exercise) =>
        <div key={exercise.name} className="exercise">
          <p className="exercise-name">{exercise.name}</p>
          <div>
            <span className="reps">&nbsp;&nbsp;&nbsp;5</span>
            <span className="reps">&nbsp;&nbsp;&nbsp;5</span>
            <span className="reps">&nbsp;&nbsp;&nbsp;5</span>
            <span className="reps">&nbsp;&nbsp;&nbsp;5</span>
            <span className="reps">&nbsp;&nbsp;&nbsp;5</span>
          </div>
        </div>
      )}
      {JSON.stringify(workout)}
    </div>
  );
}
