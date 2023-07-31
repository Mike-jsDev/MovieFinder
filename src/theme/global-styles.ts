import { customColors } from '@constants/colors';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      gradient: string;
      gradientDark: string;
      electricViolet: string;
      aqua: string;
      fuchsia: string;
      redAlert: string;
    };
  }
  interface PaletteOptions {
    custom: {
      gradient: string;
      gradientDark: string;
      electricViolet: string;
      aqua: string;
      fuchsia: string;
      redAlert: string;
    };
  }
}

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: customColors.dark,
          color: customColors.white,
          '& h1': {
            textAlign: 'center',
          },
          '.MuiFormControl-root': {
            '.MuiInputLabel-root': {
              color: customColors.electricViolet,
              textTransform: 'capitalize',
            },
            '.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: customColors.electricViolet,
              },
              '&:hover fieldset': {
                borderColor: customColors.electricViolet,
              },
              '&.Mui-focused fieldset': {
                borderColor: customColors.electricViolet,
              },
            },
            '.MuiFormHelperText-root': {
              color: customColors.redAlert,
              fontSize: '14px',
            },
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          button: {
            color: customColors.white,
            borderColor: customColors.white,
            borderRadius: '0.5rem',
            '&.Mui-disabled': {
              opacity: 0.4,
            },
            '&.Mui-selected': {
              backgroundColor: customColors.electricViolet,
            },
          },
          '.MuiPaginationItem-ellipsis ': {
            color: customColors.white,
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
      light: customColors.light,
      main: customColors.main,
      dark: customColors.dark,
      contrastText: customColors.white,
    },
    secondary: {
      light: customColors.light,
      main: customColors.main,
      dark: customColors.dark,
      contrastText: customColors.dark,
    },
    custom: {
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 43.75%, rgba(0, 0, 0, 0.3) 100%)',
      gradientDark: 'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
      electricViolet: customColors.electricViolet,
      aqua: customColors.aqua,
      fuchsia: customColors.fuchsia,
      redAlert: customColors.redAlert,
    },
  },
});
