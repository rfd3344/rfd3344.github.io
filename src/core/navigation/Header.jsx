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
  Typography,
} from '@mui/material';


import Clock from './ui/Clock';
import NavTitle from './ui/NavTitle';

export default function Header() {
  const nav = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center" flexWrap="nowrap">
          <Grid item>
            <Clock />
          </Grid>

          <Grid item>
            <NavTitle />

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
    </AppBar >
  );
}
