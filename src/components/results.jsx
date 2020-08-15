import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { formatMoney, scrollToRef } from '../utils';

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
  graphContainer: {
    height: 300,
  },
}));

const Result = React.forwardRef(({ result, calculatorContainer }, ref) => {
  const classes = useStyles();
  const [data, setData] = useState(result.graphData.map(
    (item) => ({ ...item, base: 0, extra: 0 }),
  ));

  useEffect(() => {
    setTimeout(() => {
      setData(result.graphData.map((item) => ({
        ...item, base: parseInt(item.base, 10), extra: parseInt(item.extra, 10), baseColor: 'blue', withExtraColor: 'red',
      })));
    }, 500);
  }, [result.graphData]);

  const tryAgain = () => {
    scrollToRef(calculatorContainer);
  };

  return (
    <Paper className={classes.container} elevation={3} ref={ref}>
      <Grid container direction="column" justify="center" spacing={3}>
        <Grid item>
          <Typography variant="h3">
            Results
          </Typography>
        </Grid>
        <Grid className={classes.graphContainer} item>
          <ResponsiveBar
            data={data}
            keys={result.graphKeys}
            indexBy="year"
            margin={{
              top: 0, right: 0, bottom: 50, left: 80,
            }}
            padding={0.3}
            colors={{ scheme: 'pastel1' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Year',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Super balance (thousand dollars)',
              legendPosition: 'middle',
              legendOffset: -65,
              format: (value) => formatMoney(value / 1000),
            }}
            enableLabel={false}
            tooltip={({
              index,
            }) => (
              <>
                <strong style={{ color: '#779ecb' }}>
                  If not withdrawn:
                  {' '}
                  {formatMoney(data[index].base + data[index].extra)}
                  <br />
                  Regular contributions:
                  {' '}
                  {formatMoney(data[index].base)}
                </strong>
              </>
            )}
            animate
            motionStiffness={120}
            motionDamping={40}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4">
            Summary
          </Typography>
          <Typography variant="body1">
            {`When you retire after ${result.yearsToRetirement}, you will be ${formatMoney(result.lostSuper)} worse off. Is it worth it?`}
          </Typography>
          <Typography variant="h6">
            That is equivalent to...
          </Typography>
          <Typography variant="body1">
            {`- Another ${result.yearsToCatchUp} years of work`}
          </Typography>
        </Grid>
      </Grid>
      <Button className={classes.button} variant="contained" color="primary" onClick={tryAgain}>
        Try again
      </Button>
    </Paper>
  );
});

export default Result;
