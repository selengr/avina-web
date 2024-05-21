const lightTheme = {
  Primary: {
    main: '#433792',
    hover: '#6359A3',
    focused: '#39317A',
    disabled: '#cdcdcd',
  },
  Typography: {
    main: '#353535',
    Secondary: '#6A6A6A',
    disable: '#BBBBBB',
  },
  Secondary: {
    main: '#DE74A3',
  },
  Tertiary: {
    main: '#DE74A3',
  },
  Warning: {
    main: '#F8CD11',
  },
  Error: {
    main: '#D21425',
  },
  Success: {
    main: '#30AC62',
  },
  Background: '#FAFAFA',
};

export type colors = typeof lightTheme;
export const themes = { light: lightTheme };
