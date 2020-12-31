import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ExerciseList from './components/ExerciseList';
import axios from 'axios';

function App() {

  /*  Hooks */
  const [ isLoaded, setLoaded ] = useState(false)
  const [ exercises, setExercises ] = useState([]);
  const [ apiFailed, setApiFailed ] = useState(false);
  
  const CORS_PROXY='https://cors-anywhere.herokuapp.com/';
  const GS_ENDPOINT =  'https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/';
  
  useEffect( () => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => { 
    const isDevelopment = process.env.NODE_ENV === 'development';
    // Use a proxy for CORS when running locally
    //const url = CORS_PROXY + GS_ENDPOINT;
    const url = GS_ENDPOINT;

     await axios({
       url: url,
       timeout: 5000
      })
     .then( res => {
      const exerciseData = res.data;
      const exercises = exerciseData;
       
        //console.log(exercises)
        setLoaded(true);
        setExercises( exercises.exercises);
        console.log()
     })
     .catch(function (err) {
        console.log(err)
        setApiFailed(true);
        return;
      })
  };

  const exerciseList = <ExerciseList loading={!isLoaded} exercises={exercises}  />
  const loading = `<p>Loading...</p>`
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-between"
      > 
      { !isLoaded ? loading : exerciseList }
      </Grid>
    </Container>
  );
}

export default App;
