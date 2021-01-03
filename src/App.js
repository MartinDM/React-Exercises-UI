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
  const GS_ENDPOINT = 'https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/';

  useEffect(() => {
      fetchExercises();
  }, []);

  // Short delay for demo and user feedback
  const delayLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }

  const fetchExercises = async () => {
    await axios({
      url: GS_ENDPOINT,
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
  const exerciseListComponent = <ExerciseList exercises={exercises} />;
  const loadingComponent = <Loading success={success} />;

  return (
    <>
      <Container fixed maxWidth="md">
        <Grid
          container
          direction="row"
          justify="center"
        >
        { !isLoaded || !success ? loadingComponent : exerciseListComponent}
        </Grid>
      </Container>
    </>
  );
};