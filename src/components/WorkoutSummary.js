import React from 'react';

export default function WorkoutSummary(props) {
  const { 
    date,
    name,
    exercises,
    selected,
  } = props;
  ;
  return (
    <div className={`workout-summary ${selected ? 'selected' : ''}`}>
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
  )
}
