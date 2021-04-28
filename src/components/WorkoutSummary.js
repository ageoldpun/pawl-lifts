import React from 'react';
import moment from 'moment';

export default function WorkoutSummary(props) {
  const { 
    name,
    exercises
  } = props;
  const date = moment().format("MMM Do");
  return (
    <div className="workout-summary">
      <table style={{width: '100%'}}>
        <tr>
          <th style={{textAlign: 'left'}}>{name}</th>
          <th style={{textAlign: 'right'}}>{date}</th>
        </tr>
        {exercises.map((exercise) => {
          return (
            <tr>
              <td style={{textAlign: 'left'}}>{exercise.name}</td>
              <td style={{textAlign: 'right'}}>{exercise.weight}lbs</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
