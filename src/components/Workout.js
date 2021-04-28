import React from 'react';

export default function Workout(props) {
  const { workout } = props;

  return (
    <div>
      <header className="app-header">
        <h2 className="bold">PawlLifts</h2>
      </header>
      {JSON.stringify(workout)}
    </div>
  );
}
