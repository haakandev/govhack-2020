import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Arrow from '@material-ui/icons/PlayArrowOutlined';
import Help from '@material-ui/icons/HelpOutlineOutlined';
import OpenInNew from '@material-ui/icons/OpenInNew';
import { makeStyles } from '@material-ui/core/styles';
import { calculatePostTaxIncome, formatMoney, scrollToRef } from '../utils';
import InfoTooltip from './InfoTooltip';
import { YEARS_OF_WORK_TOOLTIP } from '../constants';

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
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
  textBottomMargin: {
    marginBottom: theme.spacing(2),
  },
}));

const Result = React.forwardRef(({ result, calculatorContainer }, ref) => {
  const classes = useStyles();
  const [tooltip, setTooltip] = useState();
  const [expandedTip, setExpandedTip] = React.useState(false);
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

  const handleChangedTip = (panel) => (event, isExpanded) => {
    setExpandedTip(isExpanded ? panel : false);
  };

  const tryAgain = () => {
    scrollToRef(calculatorContainer);
  };

  return (
    <>
      <InfoTooltip
        open={!!tooltip}
        handleClose={() => setTooltip(null)}
        tooltip={tooltip}
      />
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
                        If withdrawn:
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
                <Typography variant="h4" className={classes.textBottomMargin}>
                  Summary
                </Typography>
                <Typography variant="body1">
                  {'So withdrawing '}
                  <strong>{formatMoney(result.withdrawalAmount)}</strong>
                  {' today leaves you with '}
                  <strong>{formatMoney(result.lostSuper)}</strong>
                  {' less when you retire.'}
                </Typography>
                <Typography variant="body1" className={classes.textBottomMargin}>
                  <strong>Is it still worth it?</strong>
                </Typography>
                <Typography variant="h6">
                  {`${formatMoney(result.lostSuper)} is equivalent to...`}
                </Typography>
                <Typography variant="body1" className={classes.listItem}>
                  <Arrow />
                  {`Another ${result.yearsToCatchUp} years of work `}
                  <IconButton aria-label="more information" fontSize="small" onClick={() => setTooltip(YEARS_OF_WORK_TOOLTIP(formatMoney(result.salary), formatMoney(calculatePostTaxIncome(result.salary))))}>
                    <Help />
                  </IconButton>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.textBottomMargin}>
                  What are your alternatives?
                </Typography>
                <Typography variant="body1" className={classes.textBottomMargin}>
                  What you can do instead depends on your personal circumstances and why
                  you are considering withdrawing super early. While we cannot tell you
                  the best solution, here are some suggestions that hopefully can help
                  you avoid having to withdraw super early and lose out on benefits of
                  longterm investments.
                </Typography>
                <Accordion expanded={expandedTip === 'panel1'} onChange={handleChangedTip('panel1')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography variant="button">If your income has been affected...</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography>
                      Check out JobSeeker, it provides financial help if you are looking
                      for work or if you are sick or injured and cannot work.
                    </Typography>
                    <Link
                      className={classes.listItem}
                      href="https://www.servicesaustralia.gov.au/individuals/services/centrelink/jobseeker-payment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                      {' '}
                      <OpenInNew fontSize="small" />
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandedTip === 'panel2'} onChange={handleChangedTip('panel2')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography variant="button">If you are struggling to make rent...</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography>
                      Especially in tough economic times, many people struggle to make
                      rent and keep a roof over their head. It can be very stressful.
                      Make sure you have a look at Rent Assistance as it can give you
                      a helping hand.
                    </Typography>
                    <Link
                      className={classes.listItem}
                      href="https://www.servicesaustralia.gov.au/individuals/services/centrelink/rent-assistance"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                      {' '}
                      <OpenInNew fontSize="small" />
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expandedTip === 'panel3'} onChange={handleChangedTip('panel3')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography variant="button">If you are self-isolating in Victoria...</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography>
                      If you are required to self-isolate and unable to earn an income,
                      you can quality for Pandemic Leave Disaster Payment.
                    </Typography>
                    <Link
                      className={classes.listItem}
                      href="https://www.servicesaustralia.gov.au/individuals/services/centrelink/pandemic-leave-disaster-payment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                      {' '}
                      <OpenInNew fontSize="small" />
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
            <Button className={classes.button} variant="contained" color="primary" onClick={tryAgain}>
              Try again
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
});

export default Result;
