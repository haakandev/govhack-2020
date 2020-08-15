import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import OpenInNew from '@material-ui/icons/OpenInNew';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
  },
}));

const Sources = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.container} elevation={3}>
      <Grid container direction="column" justify="center" spacing={3}>
        <Grid item>
          <Typography variant="h5">
            Sources
          </Typography>
          <Typography variant="body2" id="sources-1">
            1. ATO Taxation Statistics, 2016-2017.
            <Link
              href="https://data.gov.au/data/dataset/taxation-statistics-2016-17/resource/61b5ba05-c38c-4551-b669-864d9d29a120?view_id=972b872d-348a-4a77-8a99-b1514e9e48d3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNew fontSize="small" />
            </Link>
          </Typography>
          <Typography variant="body2" id="sources-1">
            2. ASFA Superannuation Statistics, June 2020.
            <Link
              href="https://www.superannuation.asn.au/ArticleDocuments/269/SuperStats-Jun2020.pdf.aspx?Embed=Y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNew fontSize="small" />
            </Link>
          </Typography>
          <Typography variant="body2" id="sources-2">
            3. ATO Taxation Statistics, 2017-2018.
            <Link
              href="https://data.gov.au/data/dataset/taxation-statistics-2017-18/resource/ce1c3e45-4ccb-499c-b9ee-7b06becaae48"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNew fontSize="small" />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sources;
