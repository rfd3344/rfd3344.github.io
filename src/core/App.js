import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import { theme } from './theme';
import { store } from './store';
import Router from './Router';

import Header from './navigation/Header';
import Footer from './navigation/Footer';


export default function App() {


  return (
    <Provider
      store={store}
      children={
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <HashRouter >
              <Header />

              <Box flexGrow={1}>
                <Router />
              </Box>

              <Footer />
            </HashRouter >
          </Box>
        </ThemeProvider>
      }
    />
  );
}
