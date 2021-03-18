import React from 'react';
import PropTypes from 'prop-types';
import Exercise from '../Exercise';
import './ExerciseList.scss';

export default function ExerciseList({ exercises }) {

  if (exercises.length === 0 || !exercises) {
    return (
      <div className="exercise-list--empty">
        <div className="message-area">
          <h1 className="h2 message-area__title">Oops</h1>
          <p><strong>No exercises to show right now! 😧</strong></p>
        </div>
      </div>
    ); 
  } 
  return (
    <div className="exercise-list">
    {exercises.map( (ex, i) => (
      <Exercise className="exercise" exercise={ex} key={ex.id}  />
    ))}
    </div>
  );
}

ExerciseList.propTypes = {
  exercises: PropTypes.array
};