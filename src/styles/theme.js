import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      100: '#a0c097',
      200: '#90b685',
      300: '#81ab74',
      400: '#71a162',
      500: '#619651',
      600: '#578749',
      700: '#4e7841',
      800: '#446939',
      900: '#3a5a31',
    },
    secondary: {
      100: '#d0b2df',
      200: '#c8a5da',
      300: '#c198d5',
      400: '#b98bcf',
      500: '#b17eca',
      600: '#9f71b6',
      700: '#8e65a2',
      800: '#7c588d',
      900: '#6a4c79',
    },
    golden: {
      500: '#E4A74B',
    },
    blue: {
      500: '#5F9BF1',
    },
    brown: {
      500: '#936435',
    },
  },
});

export default theme;
