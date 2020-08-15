import React, { useEffect, useState, useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import appTheme from './theme';
import Calculator from './components/Calculator';
import Results from './components/Results';
import Sources from './components/Sources';
import { scrollToRef } from './utils';

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    '& > *': {
      maxWidth: 800,
      width: '100%',
      minHeight: 200,
    },
  },
}));

function App() {
  const classes = useStyles();
  const containerRef = useRef();
  const calculatorRef = useRef();
  const resultsRef = useRef();
  const [result, setResult] = useState();

  useEffect(() => {
    scrollToRef(resultsRef);
  }, [result]);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root} ref={containerRef}>
        <Grid container direction="column" justify="center" spacing={3}>
          <Grid item>
            <Calculator onResult={setResult} ref={calculatorRef} resultsContainer={resultsRef} />
          </Grid>
          {result
          && (
          <Grid item>
            <Results result={result} ref={resultsRef} calculatorContainer={calculatorRef} />
          </Grid>
          )}
          <Grid item>
            <Sources />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
