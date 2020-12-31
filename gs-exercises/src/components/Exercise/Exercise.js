import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import Switch from '@material-ui/core/Switch';

import './Exercise.scss';

export default function Exercise( {exercise} ) {
  
  const [ isActive, setActive ] = useState(false);
  const [ gender, setGender ] = useState('female');

  const onGenderToggle = event => {
    setGender(  event.target.checked ? 'male' : 'female' );
  };

  const onShowDetails = (event) => {
  };

  
  /* Styled components */
  const StyledGenderSwitch = withStyles({
    switchBase: { 
      color: '#333;',
      "&$checked": {
        color: '#333;',
      },
      "&$checked + $track": {
        backgroundColor: '#333;',
        opacity: 0.5
      }
    },
    checked: {},
    track: {
      backgroundColor: '#333;',
      opacity: 0.5
    },
    thumb: {
      border: '2px solid white'
    }
  })(Switch);

  const events = {
    onShowDetails,
    onGenderToggle
  };

  const bodyAreas = exercise.bodyAreas;
 
  return (
    <Grid container
          direction="row" justify="space-between" 
          className={ 'exercise' + ( !isActive ? `` : ` exercise--active`) }>
      <Grid item sm={6}>
        <h3 className="exercise__title"> 
          { exercise.name }
        </h3>
        { bodyAreas.length >= 0 &&
          <div className="exercise__areas">
            <h4>Muscle groups:</h4>
            <ul className="exercise__areas">
            { bodyAreas.map( (area, i) => <li key={i}><Chip label={ area } /></li>) }
            </ul>
          </div>
        }
      </Grid>
      <Grid item sm={6}>
        <div className="exercise__image" 
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0,125,181,1) 0%,
                                rgba(1,148,214,0) 71%),
                                url(${ exercise[gender].image })`
              }}>
           <img src={ exercise[gender].image } alt={ exercise.name } className="u-visually-hidden" />
        </div>
        <FormGroup className="exercise__gender-toggle">
          <p><strong>Demo by:</strong></p>
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Female</Grid>
            <Grid item>
              <StyledGenderSwitch checked={ (gender === 'male') } onChange={ onGenderToggle } name="gender" />
            </Grid>
            <Grid item>Male</Grid>
          </Grid>
        </FormGroup>
        
        <div className="exercise__details">
          <p onClick={() => setActive( !isActive )}>Show details</p>
          { ReactHtmlParser(exercise.transcript) }
        </div>
      </Grid>
    </Grid>
  );
};

Exercise.propTypes = {
  /** Composition of the Exercise */
    exercise: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      male: PropTypes.object,
      female: PropTypes.object,
      exerciseEvent: PropTypes.func,
      bodyAreas: PropTypes.array,
    }),
  };