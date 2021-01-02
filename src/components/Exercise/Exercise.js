import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Switch from '@material-ui/core/Switch';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import Close from '@material-ui/icons/Close';
import './Exercise.scss';

/* Styled components */

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const StyledGenderSwitch = withStyles({
  switchBase: {
    color: '#333',
    "&$checked": {
      color: '#333;',
    },
    "&$checked + $track": {
      backgroundColor: '#333',
      color: '#333',
    }
  },
  checked: {},
  track: {
    backgroundColor: '#333',
    opacity: 0.5
  },
  thumb: {
    border: '2px solid white',
    background: '2px solid white'
  }
})(Switch);

export default function Exercise({ exercise }) {

  /* Hooks */
  const [gender, setGender] = useState('female');

  /* Modal styles */
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  /* Data */
  const bodyAreas = exercise.bodyAreas;

  /* Methods */
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onGenderToggle = event => {
    setGender(event.target.checked ? 'male' : 'female');
  };

  return (
    <Grid container
      direction="row" justify="space-between"
      spacing={2}
      className="exercise">
      <Grid item sm={8}>
        <h1 className="h2 exercise__title">
          {exercise.name}
        </h1>
        {bodyAreas.length >= 0 &&
          <div className="exercise__areas">
            <h3 className="h5 exercise__areas-title">Muscle groups:</h3>
            <ul className="exercise__areas-list">
              {bodyAreas.map((area, i) => <li key={i}><Chip label={area} /></li>)}
            </ul>
          </div>
        }
        <div className="exercise__details">
          <Button
            onClick={handleOpen}
            variant="contained"
            className="exercise__details-toggle"
            endIcon={<PresentToAllIcon />}
          >
            See details
          </Button>
        </div>

      </Grid>
      <Grid item xs={12} sm={4}>
        <div className="exercise__image"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,125,181,1) 0%,
                            rgba(1,148,214,0) 71%),
                            url(${exercise[gender].image})`
          }}>
          <img src={exercise[gender].image} alt={exercise.name} className="u-visually-hidden" />
        </div>
        <FormGroup className="exercise__gender-toggle">
          <h3 className="h5 exercise__gender-toggle-title">Demo by:</h3>
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Female</Grid>
            <Grid item>
              <StyledGenderSwitch color="default" checked={(gender === 'male')} onChange={onGenderToggle} name="gender" />
            </Grid>
            <Grid item>Male</Grid>
          </Grid>
        </FormGroup>
      </Grid>
      <Modal
        aria-labelledby="exercise-title"
        aria-describedby="exercise-steps"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid container
            justify="center"
            direction="row"
            maxWidth="md"
            className="modal">
            <Grid
              item
              className="modal__content">
              <Close className="modal-close" style={{ color: '#53565a' }} onClick={handleClose} />
              <div className="exercise__content" id="exercise-steps">
                <h2 className="h2 exercise__title exercise__title--modal" id="exercise-title">{exercise.name}</h2>
                {ReactHtmlParser(exercise.transcript)}
              </div>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </Grid>
  );
};

Exercise.propTypes = {
  /** Composition of the Exercise */
  exercise: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    male: PropTypes.object,
    female: PropTypes.object,
    bodyAreas: PropTypes.array,
  }),
};