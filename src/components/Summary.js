import React from 'react';

export default function Summary(props) {
  const {
    startWorkout,
    upcomingWorkouts,
  } = props;

  return (
    <div>
      {upcomingWorkouts.map((workout) => {
        const {
          date,
          exercises,
          name,
          selected,
        } = workout;

        return (
          <div className={`workout ${selected ? 'selected' : ''}`} key={name}>
            <table style={{width: '100%'}}>
              <thead>
                <tr>
                  <th style={{textAlign: 'left'}}>{name}</th>
                  <th style={{textAlign: 'right'}}>{date}</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise) => {
                  return (
                    <tr key={exercise.name}>
                      <td style={{textAlign: 'left'}}>{exercise.name}</td>
                      <td style={{textAlign: 'right'}}>5 x {exercise.weight}lbs</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        );
      })}
      <button className="button" onClick={startWorkout}>Start Workout</button>
    </div> 
  );
}
