import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Info from '@material-ui/icons/InfoOutlined';
import { DollarInput, PercentageInput } from './InputHelpers';
import {
  CONTRIBUTIONS_TOOLTIP,
  SALARY_TOOLTIP,
  YEARLY_RETURNS_TOOLTIP,
} from '../constants';
import { calculatePostTaxIncome } from '../utils';
import InfoTooltip from './InfoTooltip';

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

const Calculator = React.forwardRef(({ onResult }, ref) => {
  const classes = useStyles();
  const [tooltip, setTooltip] = useState();
  const [withdrawalAmount, setWithdrawalAmount] = useState('10000');
  const [age, setAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(65);
  const [salary, setSalary] = useState('40000');
  const [superContribution, setSuperContribution] = useState('9.5');
  const [yearlyReturns, setYearlyReturns] = useState('10.4');

  const calculate = () => {
    const yearsLeft = retirementAge - age;
    const lostSuper = withdrawalAmount * (1 + yearlyReturns / 100) ** yearsLeft;
    let yearsToCatchUp = 0;
    let cumulativeAnnualIncome = 0;
    while (cumulativeAnnualIncome < lostSuper) {
      yearsToCatchUp += 1;
      cumulativeAnnualIncome += calculatePostTaxIncome(parseInt(salary, 10));
    }

    const annualContribution = salary * (superContribution / 100);
    const graphData = Array.from({ length: retirementAge - age })
      .reduce((total, _, index) => [
        ...total,
        {
          year: `${index + 1}`,
          base: total[index].base * (1 + yearlyReturns / 100) + annualContribution,
          extra: total[index].extra * (1 + yearlyReturns / 100),
        },
      ], [{ year: '0', base: 0, extra: withdrawalAmount }]);
    const graphKeys = ['base', 'extra'];

    onResult({
      salary,
      yearsToCatchUp,
      superContribution,
      lostSuper,
      graphData,
      graphKeys,
      yearsToRetirement: yearsLeft,
    });
  };

  return (
    <Paper className={classes.container} elevation={3} ref={ref}>
      <InfoTooltip
        open={!!tooltip}
        handleClose={() => setTooltip(null)}
        tooltip={tooltip}
      />
      <Grid container direction="column" justify="center" spacing={3}>
        <Grid item>
          <TextField
            id="input-withdrawal"
            label="Super withdrawal amount"
            value={withdrawalAmount}
            onChange={(event) => {
              setWithdrawalAmount(event.target.value);
            }}
            variant="outlined"
            InputProps={{
              inputComponent: DollarInput,
            }}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Typography id="input-age-title" gutterBottom>
            {`Age: ${age} years old`}
          </Typography>
          <Slider
            value={age}
            onChange={(event, value) => setAge(value)}
            getAriaValueText={(value) => `${value} years old`}
            aria-labelledby="input-age-title"
            step={1}
            min={15}
            max={99}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <Typography id="input-retirement-age-title" gutterBottom>
            {`Desired retirement age: ${retirementAge} years old`}
          </Typography>
          <Slider
            value={retirementAge}
            onChange={(event, value) => setRetirementAge(value)}
            getAriaValueText={(value) => `${value} years old`}
            aria-labelledby="input-retirement-age-title"
            step={1}
            min={25}
            max={99}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <TextField
            id="input-salary"
            label="Salary (annual)"
            value={salary}
            onChange={(event) => {
              setSalary(event.target.value);
            }}
            variant="outlined"
            InputProps={{
              inputComponent: DollarInput,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="show more information"
                    onClick={() => setTooltip(SALARY_TOOLTIP)}
                  >
                    <Info />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            id="input-contribution"
            label="Super contribution"
            value={superContribution}
            onChange={(event) => {
              setSuperContribution(event.target.value);
            }}
            variant="outlined"
            InputProps={{
              inputComponent: PercentageInput,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="show more information"
                    onClick={() => setTooltip(CONTRIBUTIONS_TOOLTIP)}
                  >
                    <Info />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            id="input-expected-yearly"
            label="Expected yearly returns"
            value={yearlyReturns}
            onChange={(event) => {
              setYearlyReturns(event.target.value);
            }}
            variant="outlined"
            InputProps={{
              inputComponent: PercentageInput,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="show more information"
                    onClick={() => setTooltip(YEARLY_RETURNS_TOOLTIP)}
                  >
                    <Info />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
      </Grid>
      <Button className={classes.button} variant="contained" color="primary" onClick={calculate}>
        Calculate
      </Button>
    </Paper>
  );
});

export default Calculator;
