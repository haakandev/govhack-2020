import React, { useEffect, useState, useRef } from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import appTheme from './theme';
import Calculator from './components/Calculator';
import Results from './components/Results';
import Sources from './components/Sources';
import { scrollToRef } from './utils';
import { ReactComponent as Logo } from './logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      maxWidth: 800,
      width: '100%',
      minHeight: 200,
    },
  },
  banner: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FD745A',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(2),
    width: '100%',
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
      <Box className={classes.banner}>
        <Logo style={{ width: '100%' }} />
      </Box>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root} ref={containerRef}>
        <Grid container direction="column" justify="center" spacing={3}>
          <Grid item>
            <Calculator onResult={setResult} ref={calculatorRef} resultsContainer={resultsRef} />
          </Grid>
          {result && (
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
