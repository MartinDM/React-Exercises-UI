import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ExerciseList from './components/ExerciseList';
import Loading from './components/Loading';
import axios from 'axios';

export default function App() {

  /*  Hooks */
  const [isLoaded, setLoaded] = useState();
  const [success, setSuccess] = useState(true);
  const [exercises, setExercises] = useState([]);

  /* Would be stored in .env file */
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const GS_ENDPOINT = 'https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/';

  useEffect(() => {
    return () => {
      fetchExercises();
    };
  }, []);

  const fetchExercises = async () => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    // Use a proxy for CORS when running locally
    //const url = CORS_PROXY + GS_ENDPOINT;
    const url = !isDevelopment ? CORS_PROXY + GS_ENDPOINT : GS_ENDPOINT;
    await axios({
      url: GS_ENDPOINT,
      timeout: 1000
     })
      .then( res => {
        const exerciseData = res.data;
        const exercises = exerciseData.exercises;
        setExercises(exercises);
        setLoaded(true);
        console.log('1')
      })
      .catch(function (err) {
        console.log('2')
        setLoaded(true);
        setSuccess(false);
      })
  };

  /* Components */
/* 
  const exerciseListComponent = <ExerciseList loading={!isLoaded} exercises={exercises} />
  const loadingComponent = <Loading  /> */

  return (
    <>
      <Container fixed maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
        >
          { !isLoaded ? <Loading  /> : <ExerciseList exercises={exercises} />}
        </Grid>
      </Container>
    </>
  );
};