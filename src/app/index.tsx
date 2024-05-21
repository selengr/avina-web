import { AppRouter } from '../router/Router';
import { createTheme, ThemeProvider as AppProvider } from '@mui/material/styles';
import { BackDrop, Snack as SnackBar } from 'components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#433792',
      light: '#6359A3',
      dark: '#39317a',
    },
    secondary: {
      main: '#DE74A3',
    },
  },
});

export const App = () => {
  return (
    <AppProvider theme={theme}>
      <SnackBar />
      <BackDrop />
      <AppRouter />
    </AppProvider>
  );
};
