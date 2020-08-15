import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { scrollToRef } from '../utils';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
  },
  button: {
    marginTop: theme.spacing(3),
    alignSelf: 'flex-end',
  },
}));

const Result = React.forwardRef(({ result, calculatorContainer }, ref) => {
  const classes = useStyles();

  const tryAgain = () => {
    scrollToRef(calculatorContainer);
  };

  return (
    <Paper className={classes.container} elevation={3} ref={ref}>
      <Grid container direction="column" justify="center" spacing={3}>
        <Grid item>
          <Typography variant="h1">
            Results
          </Typography>
        </Grid>
        <Grid item>
          {Object.entries(result).map(([key, value]) => <Typography key={key} variant="body1">{`${key}: ${value}`}</Typography>)}
        </Grid>
      </Grid>
      <Button className={classes.button} variant="contained" color="primary" onClick={tryAgain}>
        Try again
      </Button>
    </Paper>
  );
});

export default Result;
