import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#31004a';
const orange = '#FFBA60';
const grey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: blue,
      orange: orange,
      main: blue,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: '#fff',
    },
  },

  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },

    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },

    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${blue}`,
      lineHeight: 1.5,
    },

    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: blue,
    },

    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: `${blue}`,
      fontWeight: 700,
    },

    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: grey,
    },

    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    learnButton: {
      borderColor: blue,
      color: blue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
});
