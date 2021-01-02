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
  const errorMessage = 'Oops No exercises to show 😧'

  return (
    <>
      <Backdrop className={classes.backdrop} open={true}>
        {  !success ?  
              errorMessage
            : <CircularProgress color="inherit" />
        }
      </Backdrop>
    </>
  );
};

Loading.propTypes = {
  success: PropTypes.bool,
};