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

  /* Could be stored in .env file if keys */

  // In case of needing to use a temporary proxy for CORS when debugging locally
  // Axios using URL directly	
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const GS_ENDPOINT = 'https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/';
  const isDevelopment = process.env.NODE_ENV === 'development';
  const url = !isDevelopment ? CORS_PROXY + GS_ENDPOINT : GS_ENDPOINT;

  // Short delay for demo and user feedback
  const delayLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    await axios({
      url,
      timeout: 1000
    })
      .then(res => {
        const exerciseData = res.data;
        const exercises = exerciseData.exercises;
        setExercises(exercises);
        delayLoad();
      })
      .catch(function (err) {
        delayLoad();
        setSuccess(false);
      })
  };

  /* Components */
  return (
    <>
      <Container fixed maxWidth="md">
        <Grid
          container
          direction="row"
          justify="center"
        >
          {!isLoaded || !success ? <Loading success={ success } /> : <ExerciseList exercises={exercises} />}
        </Grid>
      </Container>
    </>
  );
};