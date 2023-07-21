import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const commonColours = {
  lightBlue: '#869fcb',
  lightYellow: '#ffce7b',
  darkYellow: '#ff9f30',

};

export const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: [
      'Roboto',
    ].join(','),

    // h1: {
    //   fontSize: '52px', // 52px
    //   fontWeight: 'bold',
    //   lineHeight: '61px',
    // },
    // h2: {
    //   fontSize: '42px',
    //   fontWeight: 'bold',
    //   lineHeight: '49px',
    // },
    // h3: {
    //   fontSize: '32px',
    //   fontWeight: 'bold',
    //   lineHeight: '38px',
    // },
    // h4: {
    //   fontSize: '24px',
    //   fontWeight: 'bold',
    //   lineHeight: '28px',
    // },
    // h5: {
    //   fontSize: '20px',
    //   fontWeight: 500,
    //   lineHeight: '23px',
    // },
    // h6: {
    //   fontSize: '18px',
    //   fontWeight: 500,
    //   // lineHeight: '20px',
    // },
    // p: {
    //   fontSize: '16px',
    //   fontWeight: 400,
    //   lineHeight: '19px',
    // },
    // p2: {
    //   fontSize: '14px',
    //   fontWeight: 400,
    //   lineHeight: '16px',
    // },
    // description: {
    //   fontSize: '12px',
    //   fontWeight: 400,
    //   lineHeight: '14px',
    // },
    // textLink: {
    //   fontSize: '10px',
    //   fontWeight: 500,
    //   lineHeight: '12px',
    // },
  },
  palette: {
    common: {
      ...commonColours,
    },
    // primary: {
    //   main: commonColours.vivvyViolet,
    //   light: commonColours.lightViolet,
    //   // fontColor: commonColours.vivvyViolet,
    // },
    // secondary: {
    //   main: commonColours.sallySalmon,
    // },

    // success: {
    //   main: commonColours.allyAqua,
    // },
  },
  // props: {},
  components: {
    MuiCssBaseline: {
      styleOverrides: {

        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiTypography: {
      // defaultProps: {
      //   variantMapping: {
      //     p: 'div',
      //     p2: 'div',
      //     description: 'div',
      //     textLink: 'div',
      //   },
      // },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          verticalAlign: 'middle',
        },
      },
    },
    MuiChip: {
      // styleOverrides: {
      //   root: {
      //     fontWeight: 400,
      //   },
      // },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 160,
        },
      },
    },
  },
});
