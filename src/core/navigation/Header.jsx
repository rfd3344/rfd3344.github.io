import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Container,
  Grid,
  Avatar,
} from '@mui/material';

import {
  CalculateIcon,
  ColorIcon,
} from 'src/core/Icons';
import { openLink } from 'src/utils/browserUtils';


import Clock from './ui/Clock';



export default function Header({
  height = 90,
}) {
  const nav = useNavigate();

  return (
    <AppBar position="static">
      {/* <Container disableGutters> */}
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item >
            <Clock />
          </Grid>

          <Grid>
            Some middle
          </Grid>
          <Grid item mr={10}>
            <IconButton
              color="inherit"
              onClick={() => nav('/')}
            >
              <Avatar alt="" src="./image/bear9.png" />
            </IconButton>
          </Grid>

        </Grid>


      </Toolbar>
      {/* </Container> */}
    </AppBar >
  );
}
