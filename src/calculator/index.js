import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5)
  },
  button: {
    marginTop: theme.spacing(3),
    alignSelf: 'flex-end'
  }
}));

const Calculator = () => {
  const classes = useStyles();
  
  return (
    <Paper className={classes.container} elevation={3}>
      <Grid container direction="column" justify="center" spacing={3}>
        <Grid item>
          <TextField id="input-withdrawal" label="Super withdrawal amount" variant="outlined" fullWidth={true} />
        </Grid>
        <Grid item>
          <TextField id="input-age" label="Age" variant="outlined" fullWidth={true} />
        </Grid>
        <Grid item>
          <TextField id="input-retirement-age" label="Desired retirement age" variant="outlined" fullWidth={true} />
        </Grid>
        <Grid item>
          <TextField id="input-salary" label="Salary (annual)" variant="outlined" fullWidth={true} />
        </Grid>
        <Grid item>
          <TextField id="input-contribution" label="Super contribution" variant="outlined" fullWidth={true} />
        </Grid>
      </Grid>
      <Button className={classes.button} variant="contained" color="primary">
        Calculate
      </Button>
    </Paper>
  )
}

export default Calculator
