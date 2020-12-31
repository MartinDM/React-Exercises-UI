import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Exercise from '../Exercise';
import './ExerciseList.scss';

export default function ExerciseList({ loading, exercises, gender }) {
 
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  useEffect(() => {
  }, [])

  if (loading) {
    return (
    <div className="list-items">
    {LoadingRow}
    {LoadingRow}
    {LoadingRow}
    {LoadingRow}
    {LoadingRow}
    {LoadingRow}
  </div>
  )}

  const exerciseEvent = (e) => {
    console.log('test event on', e)
  }

  const events = {
    exerciseEvent
  };
/* 

  if (exercises.length === 0 || !exercises) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">There are no moves!</div>
        </div>
      </div>
    );
  }
 */
  return (
    <div className="exercise-list">
    {exercises.map( (ex, i) => (
      <Exercise className="exercise" exercise={ex} gender={gender} key={ex.id} {...events}  />
    ))}
    </div>
  );
}

ExerciseList.propTypes = {
  loading: PropTypes.bool,
  exercises: PropTypes.array,
  gender: PropTypes.string,
};