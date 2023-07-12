import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Container,
  Grid,
  Avatar,
  Typography,
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
  const {
    navTitle = '',
  } = useSelector(state => state.core);

  return (
    <AppBar position="static">
      {/* <Container disableGutters> */}
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center" flexWrap="nowrap">
          <Grid item  >
            <Clock />
          </Grid>

          <Grid sx={{ wordBreak: "break-all" }}>
            <Typography variant="subtitle1">
              {navTitle}
            </Typography>
          </Grid>
          <Grid item sx={{ mr: { xs: 0, md: 10 } }}>
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
