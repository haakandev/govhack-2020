import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Arrow from '@material-ui/icons/PlayArrowOutlined';
import OpenInNew from '@material-ui/icons/OpenInNew';
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
  listItem: {
    display: 'flex',
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
    <Grid container direction="column" justify="center" spacing={2}>
      <Grid item>
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
              <Typography variant="body1" className={classes.listItem}>
                <Arrow />
                {`Another ${result.yearsToCatchUp} years of work `}
                <Link href="#sources-1">
                  <sup>
                    (1)
                  </sup>
                </Link>
              </Typography>
              <Typography variant="body1" className={classes.listItem}>
                <Arrow />
                {` Another ${result.yearsToCatchUp} years of work`}
              </Typography>
              <Typography variant="body1" className={classes.listItem}>
                <Arrow />
                {` Another ${result.yearsToCatchUp} years of work`}
              </Typography>
            </Grid>
          </Grid>
          <Button className={classes.button} variant="contained" color="primary" onClick={tryAgain}>
            Try again
          </Button>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.container} elevation={3}>
          <Grid container direction="column" justify="center" spacing={3}>
            <Grid item>
              <Typography variant="h5">
                Sources
              </Typography>
              <Typography variant="body2" id="source-1">
                1. ATO Taxation Statistics, 2016-2017.
                <Link
                  href="https://data.gov.au/data/dataset/taxation-statistics-2016-17/resource/61b5ba05-c38c-4551-b669-864d9d29a120?view_id=972b872d-348a-4a77-8a99-b1514e9e48d3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenInNew fontSize="small" />
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default Result;
