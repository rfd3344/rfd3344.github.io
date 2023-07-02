import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter  } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';


import { theme } from './theme';
import { store } from './store';
import Router from './Router';

import Header from './navigation/Header';


export default function App() {


  return (
    <Provider
      store={store}
      children={
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <HashRouter >
            <Header />

            <Router />

          </HashRouter >


        </ThemeProvider>
      }
    />
  );
}
