import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      gradient: string;
      electricViolet: string;
    };
  }
  interface PaletteOptions {
    custom: {
      gradient: string;
      electricViolet: string;
    };
  }
}

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000',
          color: '#fff',
          '& h1': {
            textAlign: 'center',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontWeight: 700,
      textAlign: 'center',
    },
  },
  palette: {
    primary: {
      light: '#120056',
      main: '#ED0813',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#120056',
      main: '#ED0813',
      dark: '#000',
      contrastText: '#000',
    },
    custom: {
      gradient:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 43.75%, rgba(0, 0, 0, 0.3) 100%)',
      electricViolet: '#7600FF',
    },
  },
});
