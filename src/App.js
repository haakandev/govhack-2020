import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme'
import Calculator from './calculator'

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
      width: 500,
      minHeight: 200
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <Calculator />
      </Container>
    </ThemeProvider>
  );
}

export default App;
