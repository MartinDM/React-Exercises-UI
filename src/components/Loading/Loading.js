import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#007db5',
    backgroundColor: 'white',
  },
}));

export default function Loading( success ) {

  const classes = useStyles();
  if( !success ) {
    return (
      <div>
        <p>Oops! There was an error behind the scenes 😧</p>
        <p>Fear not! Get workout tips from the team at <a href="https://central.gymshark.com/category/conditioning">Gymshark Central</a></p>
      </div>
    )
  } else {
    return (
      <>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
      </>
    );
  }
};

Loading.propTypes = {
  success: PropTypes.bool,
};